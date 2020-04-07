<template>

  <div class="tpl-content-wrapper">
    <div class="row-content am-cf">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <!--标签页-->
              <div class="widget-title am-fl" style="width:85%;">
                <el-tabs v-model="currentStatus" @tab-click="handleClick">
                  <!--点击切换时，不要忘记重置班级为“全部班级”-->
                  <el-tab-pane label="查看全部请假记录" name="1">全部记录</el-tab-pane>
                  <el-tab-pane label="我需要审批的请假记录" name="2">需要审批的记录</el-tab-pane>
                  <el-tab-pane label="我已审批的请假记录" name="3">已审批的记录</el-tab-pane>
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
              <table width="100%" style="margin-bottom:50px;"
                     class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                <!--头标签-->
                <thead>
                <tr>
                  <th>班级</th>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>请假时间</th>
                  <th>实习单位</th>
                  <th>实习证明</th>
                  <th>请假进度</th>
                  <th v-show="currentStatus == 2 || currentStatus == 3">
                    审批
                  </th>
                </tr>
                </thead>
                <!--body内容标签-->
                <tbody>
                <tr class="gradeX" v-for="item in showTable"
                    v-show="currentClass == item.student.c_id || currentClass === ''">
                  <td>{{ item.student.c_id }}</td>
                  <td>{{ item.s_id }}</td>
                  <td>{{ item.student.s_name }}</td>
                  <td>{{ item.le_startTime | dateFormat }}-{{item.le_endTime | dateFormat}}</td>
                  <td>{{ item.trainingApply.ap_company }}</td>
                  <td>{{ item.le_status }}</td>
                  <td style="white-space: nowrap">
                    <span v-show="item.le_status == 0">等待辅导员审批</span>
                    <span v-show="item.le_status == 1">等待指导教师审批</span>
                    <span v-show="item.le_status == 2">等待专业负责人审批</span>
                    <span v-show="item.le_status == 3" style="color:#5bbfdd">审核已通过</span>
                    <span v-show="item.le_status == -1" style="color:red;">辅导员审批未通过</span>
                    <span v-show="item.le_status == -2" style="color:red;">指导教师审批未通过</span>
                    <span v-show="item.le_status == -3" style="color:red;">专业负责人审批未通过</span>
                  </td>

                  <td v-show="currentStatus == 2" style="white-space: nowrap">
                    <div class="tpl-table-black-operation">
                      <!--v-if="item.le_status==currentRole-2"-->
                      <a @click="examine(item.le_id,1,item.student.s_id,item.trainingApply.ap_name)"
                         style="width:50px;">
                        <i class="am-icon-check"></i> 批准
                      </a>
                      <a @click="examine(item.le_id, 0)" style="width:50px;"
                         class="tpl-table-black-operation-del">
                        <i class="am-icon-close"></i> 否决
                      </a>
                    </div>
                  </td>

                  <td v-show="currentStatus == 3" style="white-space: nowrap">
                    <div class="tpl-table-black-operation" v-if="item.le_status == currentRole - 1">
                      <a @click="examine(item.le_id, -1)" style="width:50px;">
                        <i class="am-icon-backward"></i> 撤回
                      </a>
                    </div>
                    <div class="tpl-table-black-operation" v-else-if="item.le_status > currentRole - 1">无法撤回</div>
                    <div class="tpl-table-black-operation" v-else-if="item.le_status == -currentRole + 1">您已否决</div>
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
    name: "leave-manager",
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
        leaves: [],
        examinedLeaves: [],
        currentTable: []
      };
    },

    created() {

    },


    methods: {
      handleClick() {

      },
      examine(id, status, sno, subject) {


      }
    },

    computed: {
      showTable() {
        if (this.currentStatus === 1) {
          this.currentTable = this.allLeaves;
        } else if (this.currentStatus === 2) {
          this.currentTable = this.leaves;
        } else if (this.currentStatus === 3) {
          this.currentTable = this.examinedLeaves;
        }
        //动态计算班级
        var obj = {};
        this.currentClasses = [];
        this.currentTable.forEach((item, index) => {
          obj[item.student.c_id] = "1";
        });
        for (var item in obj) {
          this.currentClasses.push(item);
        }
        return this.currentTable;
      },

    }
  }
</script>

<style scoped>
  tr td {
    font-size: 12px !important;
  }

  tr {
    white-space: nowrap;
  }
</style>
