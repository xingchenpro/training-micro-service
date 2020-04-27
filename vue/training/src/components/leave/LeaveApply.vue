<template>
  <div>
    <div class="tpl-content-wrapper">
      <!--否决理由dialog-->

      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf" style="min-height: 110px;width: 98.5%;margin: 0 auto 10px">
              请假申请
              <!--申请状态开始-->
              <div class="progress-container">
                <!--是否提交-->
                <div class="progress-box">
                  <span class="progress-bar" :class="[leStatus !== -10 ? 'active' : '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-dot-circle-o" :class="[leStatus !== -10 ? 'font-active' : '']"></i>
                  </div>
                  <p class="p1" v-if="leStatus === -10">未提交请假申请</p>
                  <p class="p1 font-active1" v-if="leStatus !== -10">已提交请假申请<i class="fa fa-check"></i></p>
                </div>

                <!--辅导员是否审核-->
                <div class="progress-box">
                  <span class="progress-bar" :class="[leStatus !== -10 ? 'active' : '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-dot-circle-o"
                       :class="[leStatus !== -10 && (leStatus > 0 || leStatus < -1)? 'font-active': '']"></i></div>
                  <p class="p2 font-active1 " v-if="leStatus !== -10 && (leStatus > 0 || leStatus < -1)">辅导员审核已通过<i
                    class="fa fa-check"></i></p>
                  <p class="p2" v-if="leStatus === 0 || leStatus === -10">等待辅导员审核</p>
                  <p class="p2 font-active-refuse " v-if="leStatus === -1">辅导员审核未通过<i class="fa fa-close"></i></p>
                </div>

                <!--指导教师是否审核-->
                <div class="progress-box">
                  <span class="progress-bar"
                        :class="[leStatus !== -10 && (leStatus > 0 || leStatus < -1)? 'active': '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-dot-circle-o"
                       :class="[leStatus !== -10 && (leStatus > 1 || leStatus < -2)? 'font-active': '']"></i>
                  </div>
                  <p class="p3 font-active1 " v-if="leStatus !== -10 && (leStatus > 1 || leStatus < -2)">指导教师审核已通过<i
                    class="fa fa-check"></i></p>
                  <p class="p3" v-if="leStatus === 0 || leStatus === 1 || leStatus === -10">等待指导教师审核</p>
                  <p class="p3 font-active-refuse " v-if="leStatus === -2">指导教师审核未通过<i class="fa fa-close"></i></p>
                </div>

                <!--专业负责人是否审核-->
                <div class="progress-box">
                  <span class="progress-bar"
                        :class="[leStatus !== -10 && (leStatus > 1 || leStatus < -2)? 'active': '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-dot-circle-o" :class="[leStatus !== -10 && leStatus > 2 ? 'font-active' : '']"></i>
                  </div>
                  <p class="p4 font-active1 " v-if="leStatus > 2">专业负责人审核已通过<i class="fa fa-check"></i></p>
                  <p class="p4" v-if="leStatus === 0 ||leStatus === 1 ||leStatus === 2 ||leStatus === -10">等待专业负责人审核</p>
                  <p class="p4 font-active-refuse " v-if="leStatus === -3">专业负责人审核未通过<i class="fa fa-close"></i></p>
                </div>

                <div class="progress-box">
                  <span class="progress-bar" :class="[leStatus > 2 ? 'active' : '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-check" :class="[leStatus > 2 ? 'font-active' : '']"></i>
                  </div>
                </div>
              </div>
              <!--申请状态结束-->
            </div>
            <!--请假申请表-->
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-6">
              <div class="widget am-cf">
                <div class="widget-head am-cf">
                  <div class="widget-title am-fl">请假申请表</div>
                </div>
                <div class="widget-body am-fr" style="height:600px;">
                  <el-form
                    :model="leaveForm"
                    :rules="leaveFormRules"
                    ref="leaveForm"
                    label-width="100px"
                    class="demo-ruleForm"
                    :disabled="leStatus>=0"
                    status-icon>
                    <el-form-item label="请假时间" prop="leTimeFrame">
                      <el-date-picker
                        v-model="leaveForm.leTimeFrame"
                        type="daterange"
                        range-separator="-"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="width:100%;">
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="离校时间" prop="leLeaveTime">
                      <el-date-picker
                        v-model="leaveForm.leLeaveTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                        class="setWidth">
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="家庭电话" prop="lePhone">
                      <el-input v-model="leaveForm.lePhone"></el-input>
                    </el-form-item>
                    <el-form-item label="实习住宿地址" prop="leCityAddress">
                      <el-cascader
                        placeholder="请选择省市区"
                        :options="this.$store.state.cities"
                        filterable
                        class="setWidth"
                        v-model="leaveForm.leCityAddress"
                      ></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="lePhone">
                      <el-input
                        v-model="leaveForm.leDetailAddress"
                        placeholder="街道、小区"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="请假事由" prop="leReason">
                      <el-input type="textarea" v-model="leaveForm.leReason"></el-input>
                    </el-form-item>
                    <el-form-item label="校内指导老师" prop="leTeacher">
                      <el-select
                        class="setWidth"
                        v-model="leaveForm.leTeacher"
                        placeholder="请选择指导教师">
                        <el-option v-for="(item, index) in teachers" :key="index" :label="item.tName"
                                   :value="item.tId"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="实训证明">
                      <input type="file"/>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
            <!--实训申请表-->
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-6">
              <div class="widget am-cf">
                <div class="widget-head am-cf">
                  <div class="widget-title am-fl">实训申请表</div>
                </div>
                <div class="widget-body am-fr" style="height:600px;">
                  <el-form
                    :model="applyForm"
                    :rules="applyFormRules"
                    ref="applyForm"
                    label-width="140px"
                    class="demo-ruleForm"
                    :disabled="leStatus>=0"
                    status-icon>
                    <el-form-item label="实训题目" prop="apName">
                      <el-input
                        v-model="applyForm.apName"
                        placeholder="实训题目">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="实训单位" prop="uid">
                      <el-select
                        v-model="applyForm.uId"
                        filterable
                        placeholder="若列表中没有，请先申请公司"
                        style="width:100%">
                        <el-option
                          v-for="item in companies"
                          :key="item.uId"
                          :label="item.uName"
                          :value="item.uId">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="实训地址" prop="apCityAddress">
                      <el-cascader
                        v-model="applyForm.apCityAddress"
                        placeholder="请选择省市"
                        :options="this.$store.state.cities"
                        filterable
                        class="setWidth"
                      ></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="apDetailAddress">
                      <el-input
                        v-model="applyForm.apDetailAddress"
                        placeholder="街道、大厦">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="协作指导老师姓名" prop="apTeaName">
                      <el-input
                        v-model="applyForm.apTeaName"
                        placeholder="姓名">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="协作指导老师职务" prop="apTeaTitle">
                      <el-input v-model="applyForm.apTeaTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="协作指导老师电话" prop="apTeaPhone">
                      <el-input v-model="applyForm.apTeaPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="分散实习理由" prop="apReason">
                      <el-input
                        type="textarea"
                        v-model="applyForm.apReason">
                      </el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button
                        v-if="leStatus < 0"
                        class="setWidth"
                        type="primary"
                        @click="commit('leaveForm', 'applyForm')">
                        提交请假表与申请表
                      </el-button>
                      <el-button
                        v-else
                        class="setWidth"
                        type="warning"
                        plain
                        disabled>
                        审核中无法再次提交
                      </el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
            <!--实训申请表结束-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import qs from "qs";
  export default {
    data() {
      return {
        sId: "",
        state: "",//地点
        teachers: [],
        companies: [],
        isApply: 1,
        dialogVisible: false, // 否决理由显示
        leBackReason: String, //否决理由
        leStatus: -10,
        leTimeFrame: "",
        //请假表
        leaveForm: {
          leTimeFrame: [],
          leLeaveTime: "",
          lePhone: "",
          leReason: "",
          leTeacher: "",
          leStayPlace: "", //总地址
          leDetailAddress: "", //详细地址
          leCityAddress: [] //省市区
        },
        //校验请假表
        leaveFormRules: {
          leTimeFrame: [
            {required: true, message: "请选择时间范围", trigger: "blur"}
          ],
          leLeaveTime: [
            {required: true, message: "请选择离校时间", trigger: "blur"}
          ],
          lePhone: [
            {required: true, message: "请输入家庭电话", trigger: "blur"},
            {min: 11, max: 11, message: "长度应为11", trigger: "blur"}
          ],
          leReason: [
            {required: true, message: "请输入请假事由", trigger: "blur"}
          ],
          leTeacher: [
            {required: true, message: "请选择校内指导教师", trigger: "blur"}
          ]
        },
        //实训表
        applyForm: {
          apTeacher: "",
          apName: "",
          apReason: "",
          apCompany: "",
          apPlace: "",
          apCityAddress: [], //省市区
          apDetailAddress: "", //详细地址
          apTeaName: "",
          apTeaTitle: "",
          apTeaPhone: "",
          tId: "",
          uId: ""
        },
        //校验实训表
        applyFormRules: {
          apName: [
            {required: true, message: "请输入实训题目", trigger: "blur"}
          ],
          apReason: [
            {required: true, message: "请输入分散实习理由", trigger: "blur"}
          ],
          apPlace: [{required: true, message: "请选择地址", trigger: "blur"}],
          apCompany: [
            {required: false, message: "请输入实习单位", trigger: "blur"}
          ],
          apTeaName: [
            {required: true, message: "请输入协作指导老师姓名", trigger: "blur"}
          ],
          apTeaPhone: [
            {
              required: true,
              message: "请输入协作指导老师电话",
              trigger: "blur"
            },
            {min: 11, max: 11, message: "长度应为11", trigger: "blur"}
          ],
          apTeaTitle: [
            {required: true, message: "请输入协作指导老师职务", trigger: "blur"}
          ]
        }
      };
    },
    created() {
      //学号
      this.sId = sessionStorage.getItem("username");
      //获取教师信息
      this.teachers = JSON.parse(sessionStorage.teachers);
      //查询单位
      this.$axios
        .get("/training-service/v1/training/units").then(res => {
        this.companies = res.data; //拿到公司信息
      }).catch(err => {
        console.log(err);
      });
      //如果有数据则显示
      var url = "/leave-service/v1/leave/leave?sId=" + this.sId;
      this.$axios
        .get(url)
        .then(res => {
          console.log(res);
          //判断是否提交.已经提交过的，需要显示出来
          if (res.data.result.leave) {
            //请假信息
            var leaveData = res.data.result.leave;
            this.leBackReason = leaveData.leBackReason;
            this.leStatus = leaveData.leStatus;
            console.log("leStatus", this.leStatus);
            this.leaveForm.leTimeFrame.push(leaveData.leStartTime.slice(0, 10));
            this.leaveForm.leTimeFrame.push(leaveData.leEndTime.slice(0, 10));
            this.leaveForm.leLeaveTime = leaveData.leLeaveTime.slice(0, 10);
            this.leaveForm.leReason = leaveData.leReason;
            this.leaveForm.lePhone = leaveData.lePhone;

            //转换地址格式
            var cityAddress = leaveData.leStayPlace.split(',').slice(0, 3);
            var detailAddress = leaveData.leStayPlace.split(',')[3];
            this.leaveForm.leCityAddress = cityAddress;
            this.leaveForm.leDetailAddress = detailAddress;

            //实训信息
            var trainingData = res.data.result.trainingApply;
            this.applyForm.apName = trainingData.apName;
            this.applyForm.apCompany = trainingData.apCompany;
            this.applyForm.apPlace = trainingData.apPlace;

            //转换地址格式
            var cityAddress1 = trainingData.apPlace.split(',').slice(0, 3);
            var detailAddress1 = trainingData.apPlace.split(',')[3];
            this.applyForm.apCityAddress = cityAddress1;
            this.applyForm.apDetailAddress = detailAddress1;

            this.applyForm.apTeaName = trainingData.apTeaName;
            this.applyForm.apTeaTitle = trainingData.apTeaTitle;
            this.applyForm.apReason = trainingData.apReason;
            this.applyForm.apTeaPhone = trainingData.apTeaPhone;

            this.applyForm.uId = trainingData.uId;
            this.leaveForm.leTeacher = trainingData.tId
          } else {
            //还未提交过的，null
            this.leStatus = -10;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    methods: {
      //提交表单
      commit(leaveForm, applyForm) {
        this.$confirm("是否确认提交请假申请？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$refs[leaveForm].validate(valid => {
              if (valid) {
                this.$refs[applyForm].validate(valid2 => {
                  if (valid2) {
                    var data1 = {
                      sId: this.sId,
                      leStartTime: this.leaveForm.leTimeFrame[0],
                      leEndTime: this.leaveForm.leTimeFrame[1],
                      leLeaveTime: this.leaveForm.leLeaveTime,
                      leReason: this.leaveForm.leReason,
                      lePhone: this.leaveForm.lePhone,
                      leStayPlace: this.leaveForm.leStayPlace,
                      tId: this.leaveForm.leTeacher,
                      apName: this.applyForm.apName,
                      apReason: this.applyForm.apReason,
                      apCompany: this.applyForm.apCompany,
                      apPlace: this.applyForm.apPlace,
                      apTeaName: this.applyForm.apTeaName,
                      apTeaTitle: this.applyForm.apTeaTitle,
                      apTeaPhone: this.applyForm.apTeaPhone,
                      uId: this.applyForm.uId,
                      flag: -10 //课题状态 -10 表示未提交，仅仅是请假时申请的题目。
                    };
                    console.log(data1);
                    var data = this.$qs.stringify(data1);
                    this.$axios
                      .post("/leave-service/v1/leave/leave", data)
                      .then(res => {
                        if (res.data.resultCode === 200) {
                          this.loading = false; //关闭等待
                          this.leStatus = 0;//提交后改变状态
                          this.$notify({
                            title: "成功",
                            message: "提交成功，请等待审核",
                            type: "success"
                          });
                        }
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  } else {
                    this.$notify({
                      type: "info",
                      message: "信息不完整"
                    });
                    return false;
                  }
                });
              } else {
                this.$notify({
                  type: "info",
                  message: "信息不完整"
                });
                return false;
              }
            });
          })
          .catch(() => {
            this.$notify({
              type: "info",
              message: "已取消提交"
            });
          });
      }
    },
    computed: {

    },
    watch: {
      leaveForm: {
        handler(newV, oldV) {
          this.leaveForm.leStayPlace =
            this.leaveForm.leCityAddress.join() +
            "," +
            this.leaveForm.leDetailAddress;
        },
        deep: true
      },
      applyForm: {
        handler(newV, oldV) {
          this.applyForm.apPlace =
            this.applyForm.apCityAddress.join() +
            "," +
            this.applyForm.apDetailAddress;
          this.companies.forEach((item, index) => {
            if (item.uId === this.applyForm.uId) {
              this.applyForm.apCompany = item.uName;
            }
          });
          console.log(this.applyForm.uId);
        },
        deep: true
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

  @media screen and (max-width: 420px) {
    .progress-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 15px;
    }

    .progress-box {
      flex: 1;
      position: relative;
      display: inline-block;
      margin-top: 5px;
      width: 300px;
      height: 30px;
    }

    .progress-bar {
      display: inline-block;
      width: 230px;
      height: 5px;
      background: #e8e8e8;
      margin: 15px 5px;
    }

    .p1, .p2, .p3, .p4 {
      position: absolute;
      top: 15px;
      left: 385px;
      text-align: right;
      font-size: 10px;
      color: #ccc;
    }

    .progress-container .btn-info {
      width: 300px;
    }
  }

</style>
