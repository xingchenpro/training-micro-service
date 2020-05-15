<template>
  <div>
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">

            <div class="widget am-cf" style="min-height: 110px;width: 98.5%;margin: 0 auto 10px">
              实训课题申请
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
                  <p class="p2 font-active-refuse " v-if="subject.status === -1">指导教师审核未通过<i class="fa fa-close"></i>
                  </p>
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
                  <p class="p3 font-active-refuse " v-if="subject.status === -2">专业负责人审核未通过<i class="fa fa-close"></i>
                  </p>
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
                <div class="widget-body am-fr" style="min-height: 700px;">

                  <el-form :model="subject" :rules="rules" ref="subject" :disabled="!editable" label-width="100px">

                    <el-form-item label="课题名称" prop="name">
                      <el-input :disabled="true" v-model="subject.title" style="width:25%;"></el-input>
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
                      <el-button type="primary" @click="submitForm('subject')" style="margin: 0 auto">保存</el-button>
                      <el-button @click="resetForm('subject')" style="float: right">重置</el-button>

                    </el-form-item>

                  </el-form>
                </div>
              </div>
            </div>
            <!--填写课题结束-->
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
        editable: false,//是否可以编辑，只有校外，并且请假通过的可以编辑
        subject: {
          status: -10,//任务书状态
        },
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

    created() {
      // 审核通过之前，不能编辑任务书
      var url = "/leave-service/v1/leave/leave?sId=" + sessionStorage.username;
      this.$axios.get(url).then((res) => {
        console.log(res);
        if (res.data.result.leave && res.data.result.leave.leStatus == 3) {
          this.editable = true;
        } else {
          this.editable = false;
        }
      }).catch((err) => {
        console.log(err);
      });
      var url = "/training-service/v1/training/subject?sId=" + sessionStorage.username+"&username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token");
      //查看实训课题
      this.$axios.get(url).then((res) => {
        if (res.data.resultCode === 200) {
          this.subject = res.data.result.subject;
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    methods: {
      submitForm(subject) {
        this.$refs[subject].validate((valid) => {
          if (valid) {
            this.$confirm('确认提交？','确认',{
              confirmButtonText:'确认',
              cancelButtonText:'取消'
            }).then(()=>{
              this.subject.status = 0;
              var data = {
                sId:this.subject.sId,
                status:this.subject.status,
                requirement:this.subject.requirement,
                contentAndStep:this.subject.contentAndStep,
                plan:this.subject.plan,
                assessmentRequirement:this.subject.assessmentRequirement,
              };
              this.$axios.put('/training-service/v1/training/subject'+"?username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token"),data).then( (res)=>{
                if(res.data.resultCode===200){
                  console.log(res);
                  this.subject = res.data.result.subject;
                  this.$notify({
                    type:'success',
                    message:'提交成功'
                  })
                }else{
                  this.$notify({
                    type:'error',
                    message:'提交失败'
                  })
                }
              }).catch((error)=>{
                console.log(error);
                this.$notify({
                  type:'error',
                  message:'提交失败'
                })
              })
            }).catch( ()=>{
              this.$notify({
                type:'info',
                message:'已取消'
              })
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(subject) {
        this.$refs[subject].resetFields();
      }
    }
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

</style>
