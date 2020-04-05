<template>
  <div>
    <div class="tpl-content-wrapper">
      <!--否决理由dialog-->

      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf" style="min-height: 110px;width: 98.5%;margin: 0 auto 10px">
              <span class="am-icon-home page-header-heading-icon"></span>
              校外实训申请
              <!--申请状态开始-->
              <div class="progress-container">
                <div class="progress-box">
                  <span class="progress-bar" :class="[leStatus !== -10 ? 'active' : '']"></span>
                  <div class="circle-wrapper">
                    <i class="fa fa-dot-circle-o" :class="[leStatus !== -10 ? 'font-active' : '']"></i>
                  </div>
                  <p class="p1" v-if="leStatus === -10">未提交请假申请</p>
                  <p class="p1 font-active1" v-if="leStatus !== -10">已提交请假申请<i class="fa fa-check"></i></p>
                </div>

                <div class="progress-box">
                <span
                  class="progress-bar"
                  :class="[leStatus !== -10 ? 'active' : '']"
                ></span>
                  <div class="circle-wrapper">
                    <i
                      class="fa fa-dot-circle-o"
                      :class="[
                      leStatus !== -10 && (leStatus > 0 || leStatus < -1)
                        ? 'font-active'
                        : ''
                    ]"
                    ></i>
                  </div>
                  <p
                    class="p2 font-active1 "
                    v-if="leStatus !== -10 && (leStatus > 0 || leStatus < -1)"
                  >
                    班主任审核已通过<i class="fa fa-check"></i>
                  </p>
                  <p class="p2" v-if="leStatus === 0 || leStatus === -10">
                    等待班主任审核
                  </p>
                  <p class="p2 font-active-refuse " v-if="leStatus === -1">
                    班主任审核未通过<i class="fa fa-close"></i>
                  </p>
                </div>
                <div class="progress-box">
                <span
                  class="progress-bar"
                  :class="[
                    leStatus !== -10 && (leStatus > 0 || leStatus < -1)
                      ? 'active'
                      : ''
                  ]"
                ></span>
                  <div class="circle-wrapper">
                    <i
                      class="fa fa-dot-circle-o"
                      :class="[
                      leStatus !== -10 && (leStatus > 1 || leStatus < -2)
                        ? 'font-active'
                        : ''
                    ]"
                    ></i>
                  </div>
                  <p
                    class="p3 font-active1 "
                    v-if="leStatus !== -10 && (leStatus > 1 || leStatus < -2)"
                  >
                    指导教师审核已通过<i class="fa fa-check"></i>
                  </p>
                  <p
                    class="p3"
                    v-if="leStatus === 0 || leStatus === 1 || leStatus === -10"
                  >
                    等待指导教师审核
                  </p>
                  <p class="p3 font-active-refuse " v-if="leStatus === -2">
                    指导教师审核未通过<i class="fa fa-close"></i>
                  </p>
                </div>
                <div class="progress-box">
                <span
                  class="progress-bar"
                  :class="[
                    leStatus !== -10 && (leStatus > 1 || leStatus < -2)
                      ? 'active'
                      : ''
                  ]"
                ></span>
                  <div class="circle-wrapper">
                    <i
                      class="fa fa-dot-circle-o"
                      :class="[
                      leStatus !== -10 && leStatus > 2 ? 'font-active' : ''
                    ]"
                    ></i>
                  </div>
                  <p class="p4 font-active1 " v-if="leStatus > 2">
                    专业负责人审核已通过<i class="fa fa-check"></i>
                  </p>
                  <p
                    class="p4"
                    v-if="
                    leStatus === 0 ||
                      leStatus === 1 ||
                      leStatus === 2 ||
                      leStatus === -10
                  "
                  >
                    等待专业负责人审核
                  </p>
                  <p class="p4 font-active-refuse " v-if="leStatus === -3">
                    专业负责人审核未通过<i class="fa fa-close"></i>
                  </p>
                </div>
                <div class="progress-box">
                <span
                  class="progress-bar"
                  :class="[leStatus > 2 ? 'active' : '']"
                ></span>
                  <div class="circle-wrapper">
                    <i
                      class="fa fa-check"
                      :class="[leStatus > 2 ? 'font-active' : '']"
                    ></i>
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
                    status-icon
                  >
                    <el-form-item label="请假时间" prop="leTimeFrame">
                      <el-date-picker
                        v-model="leaveForm.leTimeFrame"
                        type="daterange"
                        range-separator="-"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="width:100%;"
                      >
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="离校时间" prop="leLeaveTime">
                      <el-date-picker
                        v-model="leaveForm.leLeaveTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                        class="setWidth"
                      >
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
                      <el-input
                        type="textarea"
                        v-model="leaveForm.leReason"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="校内指导老师" prop="leTeacher">
                      <el-select
                        class="setWidth"
                        v-model="leaveForm.leTeacher"
                        placeholder="请选择指导教师"
                      >
                        <el-option
                          v-for="(item, index) in teachers"
                          :key="index"
                          :label="item.t_name"
                          :value="item.t_id"
                        ></el-option>
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
                    <el-form-item label="实训单位" prop="apUid">
                      <el-select
                        v-model="applyForm.apUid"
                        filterable
                        placeholder="若列表中没有，请先申请公司"
                        style="width:100%">
                        <el-option
                          v-for="item in companies"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
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
  export default {
    name: "leave-apply",
    data() {
      return {
        state: "",
        loading: true,
        teachers: [],
        companies: [],
        isApply: 1,
        dialogVisible: false, // 否决理由显示
        reason: String, //否决理由
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
          apUid: ""
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


    },

    methods: {},
    computed: {},
    watch: {}

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
