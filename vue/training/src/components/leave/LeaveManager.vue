<template>

  <div class="tpl-content-wrapper">
    <div class="row-content am-cf">
      <div class="row">
        <!--斑马线-->
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">

            <div class="widget-head am-cf">
              <!--标签页-->
              <div class="widget-title am-fl" style="width:85%;">
                <el-tabs v-model="currentStatus" @tab-click="handleClick">
                  <!--点击切换时，不要忘记重置班级为“全部班级”-->
                  <el-tab-pane label="查看全部请假记录" name="1"></el-tab-pane>
                  <el-tab-pane label="我需要审批的请假记录" name="2"></el-tab-pane>
                  <el-tab-pane label="我已审批的请假记录" name="3"></el-tab-pane>
                  {{ showRole }}
                </el-tabs>
              </div>
              <!--搜索-->

              <div class="widget-function am-fr" style="width:15%;margin-top: 5px;">
                <form role="form" class="form-inline">
                  <div class="form-group">
                    <select class="form-control" v-model="currentClass" style="width:160px;">
                      <option value="">全部班级</option>
                      <option v-for="item in currentClasses" :value="item">{{item}}</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <!--列表-->
            <div class="widget-body  widget-body-lg am-fr" style="min-height: 750px;">
              <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>班级</th>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>请假时间</th>
                  <th>实习单位</th>
                  <th>实习证明</th>
                  <th>请假进度</th>
                  <th v-show="currentStatus == 2 || currentStatus == 3">审批</th>
                </tr>
                </thead>
                <!--body内容标签-->
                <tbody>
                <tr class="even gradeX" v-for="(item,index) in showTable" v-show="currentClass == item.sClass || currentClass === ''">
                  <td>{{index+1}}</td>
                  <td>{{ item.sId }}</td>
                  <td>{{ item.sClass }}</td>
                  <td>{{ item.sNeme }}</td>
                  <td>{{ item.leStartTime | dateFormat }}-{{item.leEndTime | dateFormat}}</td>
                  <td>{{ item.trainingApply.apCompany }}</td>
                  <td>{{ item.leStatus }}</td>
                  <td>
                    <span v-show="item.leStatus == 0">等待辅导员审批</span>
                    <span v-show="item.leStatus == 1">等待指导教师审批</span>
                    <span v-show="item.leStatus == 2">等待专业负责人审批</span>
                    <span v-show="item.leStatus == 3" style="color:#67c13a">审核已通过</span>
                    <span v-show="item.leStatus == -1" style="color:red;">辅导员审批未通过</span>
                    <span v-show="item.leStatus == -2" style="color:red;">指导教师审批未通过</span>
                    <span v-show="item.leStatus == -3" style="color:red;">专业负责人审批未通过</span>
                  </td>

                  <td v-show="currentStatus == 2">
                    <div class="tpl-table-black-operation">
                      <!--v-if="item.le_status==currentRole-2"-->
                      <a @click="examine(item.leId,1,item.sId,item.trainingApply.apName)"
                         style="width:50px;cursor: pointer;">
                        <i class="am-icon-check"></i> 批准
                      </a>
                      <a @click="examine(item.leId, 0)" style="width:50px;cursor: pointer;"
                         class="tpl-table-black-operation-del">
                        <i class="am-icon-close"></i> 否决
                      </a>
                    </div>
                  </td>

                  <td v-show="currentStatus == 3">
                    <div class="tpl-table-black-operation" v-if="item.leStatus == currentRole - 1">
                      <a @click="examine(item.leId, -1)" style="width:50px;cursor: pointer;">
                        <i class="am-icon-backward"></i> 撤回
                      </a>
                    </div>
                    <div class="tpl-table-black-operation" v-else-if="item.leStatus > currentRole - 1">无法撤回</div>
                    <div class="tpl-table-black-operation" v-else-if="item.leStatus == -currentRole + 1">您已否决</div>
                  </td>
                </tr>
                </tbody>
              </table>

              <h3 v-if="showTable.length === 0 && currentStatus == 1" style="text-align: center;margin-top: 200px">
                您还没有任何审批记录</h3>
              <h3 v-if="showTable.length === 0 && currentStatus == 2" style="text-align: center;margin-top: 200px">
                您已审批完所有请假记录</h3>
              <h3 v-if="showTable.length === 0 && currentStatus == 3" style="text-align: center;margin-top: 200px">
                您还没有任何审批记录</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentClass: "",
        currentClasses: [
          '软件161', '软件162', '软件163', '软测161',
          '软测162', '软测163', '计科161', '计科162',
          '计科163', '网络161', '网络162',
        ],
        //记录当前筛选框的状态
        currentStatus: "2",
        //记录当前用户的批改权限
        currentRole: "",
        allLeaves: [],
        needExamineLeaves: [],
        examinedLeaves: [],
        currentTable: []
      };
    },

    created() {
      this.currentRole = this.$route.query.currentRole || sessionStorage.role;
      var tId = sessionStorage.username;
      //请求数据
      var url = "/leave-service/v1/leave/leaves?role=" + this.currentRole + "&tId=" + tId;
      this.$axios.get(url).then(res => {
        if (res.data.resultCode === 200) {
          console.log(res.data);
          this.allLeaves = res.data.result.allLeaves;
          this.needExamineLeaves = res.data.result.needExamineLeaves;
          this.examinedLeaves = res.data.result.examinedLeaves;
        }
      }).catch(error => {
        console.log(error);
      });
    },

    methods: {
      //切换tab业的时候 重置一下班级
      handleClick() {
        this.currentClass = ''
      },
      //审核请假，传递请求
      examine(leId, status, sId, title) {
        //如果是否决操作 statu == 0，需要输入理由
        var data;
        if (status == 0) {
          this.$prompt('请输入否决理由', '否决', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            inputType: 'textarea'
          }).then(({value}) => {
            data = this.$qs.stringify({
              tId: sessionStorage.username,
              leId: leId,
              role: this.$route.query.currentRole || sessionStorage.role, //一定要加上或者取sessionStorage中的角色，（辅导员）
              leStatus: status,
              sId: sId,
              title: title,
              leBackReason: value
            });
            this.$axios
              .post("/leave-service/v1/leave/examine", data)
              .then(res => {
                console.log(res);
                if (res.data.resultCode === 200) {
                  console.log(res);
                  this.allLeaves = res.data.result.allLeaves;
                  this.needExamineLeaves = res.data.result.needExamineLeaves;
                  this.examinedLeaves = res.data.result.examinedLeaves;
                  this.$notify({
                    type: "success",
                    message: "操作成功"
                  });
                }
              })
              .catch(error => {
                console.log(error);
                this.$notify({
                  type: "error",
                  message: "审核失败"
                });
              });
          }).catch((err) => {
            this.$notify({
              type: "info",
              message: "已取消",
              duration: "1500"
            });
          })
        }
        //大于0
        else {
          this.$confirm("确认操作？", "提示", {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
              data = this.$qs.stringify({
                tId: sessionStorage.username,
                leId: leId,
                role: this.$route.query.currentRole || sessionStorage.role, //一定要加上或者取sessionStorage中的角色，（辅导员）
                leStatus: status,
                sId: sId,
                title: title
              });
              this.$axios.post("/leave-service/v1/leave/examine", data).then(res => {
                  if (res.data.resultCode === 200) {
                    this.allLeaves = res.data.result.allLeaves;
                    this.needExamineLeaves = res.data.result.needExamineLeaves;
                    this.examinedLeaves = res.data.result.examinedLeaves;
                    this.$notify({
                      type: "success",
                      message: "操作成功"
                    });
                  }
                }).catch(error => {
                  console.log(error);
                  this.$notify({
                    type: "error",
                    message: "审核失败"
                  });
                });
            }).catch(() => {
              this.$notify({
                type: "info",
                message: "已取消",
                duration: "1500"
              });
            });
        }
      }
    },

    computed: {
      //当前的 Tab
      showTable() {
        if (this.currentStatus == 1) {
          this.currentTable = this.allLeaves;
        } else if (this.currentStatus == 2) {
          this.currentTable = this.needExamineLeaves;
        } else if (this.currentStatus == 3) {
          this.currentTable = this.examinedLeaves;
        }
        //动态计算班级
        var obj = {};
        this.currentClasses = [];
        this.currentTable.forEach((item, index) => {
          obj[item.sClass] = "1";
        });
        for (var item in obj) {
          this.currentClasses.push(item);
        }
        return this.currentTable;
      },
      //监听角色的变化，必学使用  {{ showRole }}
      showRole() {
        this.currentRole = this.$route.query.currentRole || sessionStorage.role;
        var tId = sessionStorage.username;
        //请求数据
        var url = "/leave-service/v1/leave/leaves?role=" + this.currentRole + "&tId=" + tId;
        this.$axios.get(url).then(res => {
          if (res.data.resultCode === 200) {
            console.log(res.data);
            this.allLeaves = res.data.result.allLeaves;
            this.needExamineLeaves = res.data.result.needExamineLeaves;
            this.examinedLeaves = res.data.result.examinedLeaves;
          }
        }).catch(error => {
          console.log(error);
        });
      }
    },

    filters: {
      //格式化日期 取前10位
      dateFormat(value) {
        return value
          .toString()
          .split("")
          .slice(0, 10)
          .join("");
      }
    }

  }
</script>

<style scoped>
  tr td {
    font-size: 14px !important;
    height: 17px;

  }

  tr {
    white-space: nowrap;
  }
</style>
