<template>
  <div   class="tpl-content-wrapper">
    <div class="row-content am-cf">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div
              class="widget-head am-cf"
              style="display: flex;border-bottom:none;">
              <div class="widget-title am-fl" style="flex:0.9">
                <el-tabs  v-model="currentStatus">
                  <el-tab-pane label="查看全部课题" name="all"></el-tab-pane>
                  <el-tab-pane label="我需要审批的课题" name="1"></el-tab-pane>
                  <el-tab-pane label="我已审批的课题" name="2"></el-tab-pane>
                </el-tabs>
              </div>
              <div class="widget-function am-fr" style="flex:0.1;">
                <form role="form" class="form-inline">
                  <div class="form-group">
                    <button class="btn btn-info" style="margin-top: 5px" v-show="currentStatus == 1" @click="batchEaxm">批量批准</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="widget-body  widget-body-lg am-fr" style="min-height: 750px;">
              <table width="100%" style="margin-bottom:50px;" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                <thead>
                <tr>
                  <th v-show="currentStatus == 1">
                    <el-checkbox @change="selectAll" class="myCheckbox" :value="allSelectedItem.length === count"></el-checkbox>
                  </th>
                  <th>序号</th>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>班级</th>
                  <th>题目</th>
                  <th>指导教师</th>
                  <th>审核状态</th>
                  <th v-show="currentStatus == 1">审核</th>
                </tr>
                </thead>
                <tbody>
                <tr class="gradeX" v-for="(item, index) in showTable">
                  <!--v-show="currentClass===item.class||currentClass===''"-->
                  <td v-show="currentStatus == 1">
                    <el-checkbox type="checkbox" @change="selectSingle(item.sno)" style="display: inline-block;width:14px;height:14px" :value="allSelectedItem.indexOf(item.sno) !== -1"></el-checkbox>
                  </td>
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.sno }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.className }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.tutor }}</td>
                  <td :style="item.status < 0 ? 'color:#fd4949' : ''">
                    <span v-show="item.status == -2">专业负责人已否决</span>
                    <span v-show="item.status == -1">指导教师已否决</span>
                    <span v-show="item.status == -10">未提交</span>
                    <span v-show="item.status == 0">等待指导教师审核</span>
                    <span v-show="item.status == 1">等待专业负责人审核</span>
                    <span v-show="item.status == 2" style="color:#67c13a">审核通过</span>
                  </td>
                  <td v-show="currentStatus != 'all'">
                    <div class="tpl-table-black-operation">
                      <a href="javascript:;" v-show="currentStatus == 1" @click="examine(item,2)">
                        <i class="am-icon-check"></i>批准
                      </a>
                      <a href="javascript:;" v-show="currentStatus == 1" class="tpl-table-black-operation-del" @click="examine(item,-2)">
                        <i class="am-icon-close"></i>否决
                      </a>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
              <h3 v-if="showTable.length === 0 && currentStatus == 1" style="text-align: center">您暂时没有需要审批的课题</h3>
              <h3 v-if="showTable.length === 0 && currentStatus == 2" style="text-align: center">您还没有任何审批记录</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        allChecked: 0, //标识全选
        loading: true, //页面等待
        allSelectedItem: [], //存放被勾选的项目
        currentStatus: "all",
        count:Number,
        subjectsExamnation: []
      };
    },
    created() {
      this.$axios
        .get("apiTraining/trainingSubjects?role=4")
        .then(res => {
          console.log(res);
          this.loading = false;
          if (res.data.resultCode === 200) {
            this.subjectsExamnation = res.data.result.trainingSubjects;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    methods: {
      //点击单选按钮
      selectSingle(sno) {
        console.log(sno);
        if (this.allSelectedItem.indexOf(sno) !== -1) {
          this.allSelectedItem.splice(this.allSelectedItem.indexOf(sno), 1);
        } else {
          this.allSelectedItem.push(sno);
        }
      },
      //点击全选按钮
      selectAll(value) {
        //elementUI的@change事件会返回一个value，选中为true，退选为false
        if (value) {
          this.allSelectedItem = [];
          this.subjectsExamnation.forEach((item, index) => {
            if(item.status == this.currentStatus){
              this.allSelectedItem.push(item.sno);
            }
          });
        } else {
          this.allSelectedItem = [];
        }
      },
      //批量审核
      batchEaxm(){
        //直接把选中的学号数组传给后台即可
        this.$confirm('确认操作？',{
          confirmButtonText:'确认',
          cancelButtonText:'取消'
        }).then( ()=>{
          var data = this.$qs.stringify({
            examineStudentSubjects:JSON.stringify(this.allSelectedItem),//数组传递失败，只能暂时转成字符串进行传递
            role:4,
            status:2
          });
          console.log(data);
          this.$axios.post('apiTraining/examineSubject',data,).then( (res)=>{
            this.loading = false;
            if(res.data.resultCode === 200){
              this.subjectsExamnation = res.data.result.trainingSubjects;
              this.allSelectedItem = [];
              this.$notify({
                type:'success',
                message:'批量审核成功'
              })
            }
          }).catch( (err)=>{
            this.$notify({
              type:'error',
              message:'批量审核失败'
            });
            console.log(err)
          })
        }).catch( (err)=>{
          this.$notify({
            type:'info',
            message:'已取消'
          });
          console.log(err);
        })
      },
      //单条审核、否决
      examine(item,status){
        var data;
        if(status<=0){
          this.$prompt('请输入否决理由','否决',{
            confirmButtonText:'确认',
            cancelButtonText:'取消',
            inputType:'textarea'
          }).then(({value})=>{
            data = this.$qs.stringify({
              examineStudentSubjects:JSON.stringify([item.sno]),//这里只是传个账号，只是为了和批量审核共用一个接口，所以字段名是这个
              role: 4,
              status:status,
              reason:value
            });
            this.$axios
              .post("/apiTraining/examineSubject", data)
              .then(res => {
                if (res.data.resultCode === 200) {
                  this.subjectsExamnation = res.data.result.trainingSubjects;
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
          }).catch( (err) =>{
            this.$notify({
              type: "info",
              message: "已取消",
              duration: "1500"
            });
          })
        }
        //大于0
        else{
          this.$confirm("确认操作？", "提示", {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              data = this.$qs.stringify({
                examineStudentSubjects:JSON.stringify([item.sno]),
                role: 4,
                status:status,
              });
              this.$axios
                .post("/apiTraining/examineSubject", data)
                .then(res => {
                  console.log(res);
                  if (res.data.resultCode === 200) {
                    this.subjectsExamnation = res.data.result.trainingSubjects;
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
            })
            .catch(() => {
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
      showTable() {
        if (this.currentStatus == 'all') {
          return this.subjectsExamnation;
        } else {
          var arr = [];
          this.subjectsExamnation.forEach((item, index) => {
            if (this.currentStatus == item.status ||(this.currentStatus==2&&(item.status==2||item.status==-2))) {
              arr.push(item);
            }
          });
        }
        this.count = arr.length;
        return arr;
      }
    }
  };
</script>

<style scoped>

</style>
