<template>
  <div class="tpl-content-wrapper">
    <!--周总结标签-->
    <div class="row-content am-cf" style="width: 14%;float: left;padding-right: 5px">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title" style="text-align: center;font-weight: 700;color: black">我的学生</div>
            </div>
            <div class="widget-body am-fr" style="height: 790px">

              <ul>
                <li v-for="item in subjects" @click="currentSId=item.sId"
                    :class="item.sId===currentSId ? 'active-li' : ''">
                  <a :style="item.status >= 1 ? 'color:#67c13a': item.status<0?'color:#F56C6C': 'color:#878787'">
                    {{item.student.sName}}
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--周总结内容-->
    <div class="row-content am-cf" style="width: 86%;float: left;margin-left: -27px">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">

          <div class="widget am-cf" style="min-height: 110px;width: 98%;margin: 0 auto 10px">
            学生实训课题状态
            <!--申请状态开始-->
            <div class="progress-container">
              <div class="progress-box">
                <span class="progress-bar" :class="[subject.status !== -10 ? 'active' : '']"></span>
                <div class="circle-wrapper">
                  <i class="fa fa-dot-circle-o" :class="[subject.status !== -10 ? 'font-active' : '']"></i>
                </div>
                <p class="p1" v-if="subject.status === -10">未申请课题</p>
                <p class="p1 font-active1" v-if="subject.status !== -10">已申请课题<i class="fa fa-check"></i></p>
              </div>

              <!--指导教师是否审核通过-->
              <div class="progress-box">
                <span class="progress-bar" :class="[subject.status !== -10 ? 'active' : '']"></span>
                <div class="circle-wrapper">
                  <i class="fa fa-dot-circle-o"
                     :class="[subject.status !== -10 && (subject.status > 0 || subject.status < -1)? 'font-active': '']"></i>
                </div>
                <p class="p2 font-active1 "
                   v-if="subject.status !== -10 && (subject.status > 0 || subject.status < -1)">指导教师审核已通过<i
                  class="fa fa-check"></i></p>
                <p class="p2" v-if="subject.status === 0 || subject.status === -10">等待指导教师审核</p>
                <p class="p2 font-active-refuse " v-if="subject.status === -1">指导教师审核未通过<i class="fa fa-close"></i></p>
              </div>

              <!--等待专业负责人审核-->
              <div class="progress-box">
                <span class="progress-bar"
                      :class="[subject.status !== -10 && (subject.status > 0 || subject.status < -1)? 'active': '']"></span>
                <div class="circle-wrapper">
                  <i class="fa fa-dot-circle-o"
                     :class="[subject.status !== -10 && (subject.status > 1 || subject.status < -2)? 'font-active': '']"></i>
                </div>
                <p class="p2 font-active1 "
                   v-if="subject.status !== -10 && (subject.status > 1 || subject.status < -2)">专业负责人审核已通过<i
                  class="fa fa-check"></i></p>
                <p class="p3" v-if="subject.status === 0 || subject.status === 1 || subject.status === -10">
                  等待专业负责人审核</p>
                <p class="p3 font-active-refuse " v-if="subject.status === -2">专业负责人审核未通过<i class="fa fa-close"></i></p>
              </div>

              <div class="progress-box">
                <span class="progress-bar" :class="[subject.status >= 2 ? 'active' : '']"></span>
                <div class="circle-wrapper">
                  <i class="fa fa-check" :class="[subject.status >= 2 ? 'font-active' : '']"></i>
                </div>
              </div>
            </div>
            <!--申请状态结束-->
          </div>
          <!--填写课题开始-->
          <div class="am-u-sm-12 am-u-md-12">
            <div class="widget am-cf">
              <div class="widget-body am-fr" style="min-height: 727px;">

                <el-form :model="subject" :rules="rules" ref="subject" label-width="100px">

                  <el-form-item label="课题名称" prop="name">
                    <el-input v-model="subject.title" style="width:25%;"></el-input>
                  </el-form-item>

                  <el-form-item label="已知技术参数和实训要求" prop="requirement">
                    <el-input type="textarea" v-model="subject.requirement" rows="5"></el-input>
                  </el-form-item>

                  <el-form-item label="内容和步骤" prop="contentAndStep">
                    <el-input type="textarea" v-model="subject.contentAndStep" rows="5"></el-input>
                  </el-form-item>

                  <el-form-item label="实训工作计划与进度安排" prop="plan">
                    <el-input type="textarea" v-model="subject.plan" rows="5"></el-input>
                  </el-form-item>

                  <el-form-item label="实训考核要求" prop="assessmentRequirement">
                    <el-input type="textarea" v-model="subject.assessmentRequirement" rows="5"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button @click="examineSubject(role - 2)" type="primary" style="margin-left: 20px;float: right">
                      批准
                    </el-button>
                    <el-button @click="examineSubject(-role + 2)" style="float: right">否决</el-button>

                  </el-form-item>

                </el-form>
              </div>
            </div>
          </div>
          <!--填写课题结束-->
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentSId: String,
        subject: {
          status: -10,//任务书状态
        },
        role: Number,
        subjects: [],
        rules: {
          title: [
            {required: true, message: '请输入课题名称', trigger: 'blur'},
          ],
          requirement: [
            {required: true, message: '请填写已知技术参数和实训要求', trigger: 'blur'}
          ],
          contentAndStep: [
            {required: true, message: '请填写内容和计划', trigger: 'blur'}
          ],
          plan: [
            {required: true, message: '请填写实训工作计划与进度安排', trigger: 'blur'}
          ],
          assessmentRequirement: [
            {required: true, message: '请填写实训考核要求', trigger: 'blur'}
          ],
        }
      };
    },

    //加载
    created() {
      this.role = this.$route.query.currentRole;
      console.log(this.role);
      var url = "/training-service/v1/training/subjects" + "?tId=" + sessionStorage.username + "&role=" + this.role;
      this.$axios.get(url).then(res => {
        this.loading = false;
        if (res.data.resultCode === 200) {
          this.subjects = res.data.result.subjects;
          this.currentSId = this.subjects[0].sId;
          console.log(res);
        }
      });
    },

    //方法
    methods: {
      //审核课题
      examineSubject(status) {
        //判断状态如果小于0，则证明是否决操作，需要填写理由
        if (status < 0) {
          this.$prompt("请填写否决理由", "通知", {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            inputType: "textarea"
          })
            .then(({value}) => {
              var data = {
                sId: this.subject.sId,
                status: status,
                role: this.role,
                reason: value,
                tutor: sessionStorage.username
              };
              console.log(data);
              this.$axios
                .put("/training-service/v1/training/examine/subject", data)
                .then(res => {
                  if (res.data.resultCode === 200) {
                    this.subjects = res.data.result.subjects;
                    //此时学号没有发生变化，不会更新数据，所以手动更新
                    this.subjects.forEach((item, index) => {
                      if (item.sId === this.currentSId) {
                        this.subject = this.subjects[index];
                      }
                    });
                    this.$message({
                      type: "success",
                      message: "否决成功"
                    });
                  } else {
                    console.log(res);
                    this.$message({
                      type: "error",
                      message: "否决失败"
                    });
                  }
                }).catch(err => {
                console.log(err);
                this.$message({
                  type: "error",
                  message: "否决失败"
                });
              });
            }).catch(err => {
            console.log(err);
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
        }
        //如果不小于0，直接通过不需要填写理由
        else {
          this.$confirm("确认审核？", "提示", {
            confirmButtonText: "确认",
            cancelButtonText: "取消"
          }).then(() => {
            var data = {
              sId: this.subject.sId,
              status: status,
              role: this.role,
              tutor: sessionStorage.username
            };
            console.log(data);
            this.$axios
              .put("/training-service/v1/training/examine/subject", data).then(res => {
              if (res.data.resultCode === 200) {
                this.subjects = res.data.result.subjects;
                //此时学号没有发生变化，不会更新数据，所以手动更新
                this.subjects.forEach((item, index) => {
                  if (item.sId === this.currentSId) {
                    this.subject = this.subjects[index];
                  }
                });
                this.$message({
                  type: "success",
                  message: "审核成功"
                });
              } else {
                console.log(res);
                this.$message({
                  type: "error",
                  message: "审核失败"
                });
              }
            }).catch(err => {
              console.log(err);
              this.$message({
                type: "error",
                message: "审核失败"
              });
            });
          }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
        }
      },
    },
    watch: {
      currentSId: function () {
        //监视学生变化，显示不同的任务书
        this.subjects.forEach((item, index) => {
          if (item.sId === this.currentSId) {
            this.subject = this.subjects[index];
          }
        });
      }
    },
  }
</script>

<style scoped>
  .progress-container {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    margin-top: 15px;
  }

  .progress-box {
    flex: 1;
    position: relative;
    height: 30px;
    /*border: 1px solid red;*/
  }

  .progress-bar {
    float: left;
    display: inline-block;
    width: 88%;
    height: 5px;
    background: #e8e8e8;
    margin: 11px 5px;
    /*border: 1px solid #181e39;*/
  }

  i {
    color: #e8e8e8;
  }

  .circle-wrapper {
    float: left;
    /*border: 1px solid #104cec;*/
    display: inline-block;
    text-align: center;
  }

  .p1,
  .p2,
  .p3,
  .p4,
  .p5 {
    position: absolute;
    font-size: 12px;
    color: #ccc;
    margin: 0;
    top: 30px;
    left: 75%;
  }

  .active {
    background: #67c13a;
  }

  .font-active {
    color: #67c13a;
  }

  .font-active1 {
    color: #67c13a;
    font-weight: bold;
  }

  .font-active1 .fa-check {
    color: #67c13a;
    font-size: 12px;
  }

  .font-active-refuse {
    font-weight: bold;
    color: #fd4949;
    font-size: 12px;
  }

  .font-active-refuse .fa-close {
    color: #fd4949;
  }

  ul {
    list-style-type: none;
    margin-left: -32px;
    width: 150px;
    background-color: #fcfffd;
    max-height: 760px;
    overflow: auto;
  }

  li {
    width: inherit;
    overflow: auto;
    cursor: pointer;
  }

  li a {
    display: block;
    color: #000;
    padding: 7px 16px;
    text-decoration: none;
    border-top: 1px solid #c8c6bc;
    border-left: 3px solid #3a3f51;
    font-size: 15px;
    font-weight: 700;
  }

  li a:active {
    background-color: #c8c6bc;
    color: white;

  }

  li a:hover:not(.active) {
    background-color: #c8c6bc;
    color: white;
  }

  .active-li {
    background: #bde1d6;
  }

</style>
