<template>
  <div class="tpl-content-wrapper">
    <!--模态框 添加公司-->
    <el-dialog
      title="添加或修改公司"
      :visible.sync="dialogFormVisible"
      append-to-body
      @close="closeDialog">
      <el-form style="width:75%;margin:0 auto;" :model="companyApply" ref="unitInfo" label-width="70px"
               :rules="companyApplyRules">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="companyApply.uName" placeholder="请填写公司名称（请假申请表中已有单位，则无需申请）"></el-input>
        </el-form-item>
        <el-form-item label="公司所在城市" prop="cityAddress">
          <el-cascader v-model="companyApply.cityAddress" placeholder="请选择省市区" :options="this.$store.state.cities"
                       filterable class="setWidth"></el-cascader>
        </el-form-item>
        <el-form-item label="公司详细地址" prop="detailAddress">
          <el-input v-model="companyApply.detailAddress" placeholder="街道/办公楼"></el-input>
        </el-form-item>
        <el-form-item label="公司详情介绍" prop="details">
          <el-input v-model="companyApply.uDetails" type="textarea" rows="4" placeholder="详情介绍"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="companyApply.uRemark" type="textarea" rows="4" placeholder="想补充什么？"></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="warning" round @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" round @click="commit()">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--公司列表-->
    <div class="row-content am-cf">
      <div class="row">
        <!--斑马线-->
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl" style="width:85%;">
                单位管理
              </div>
              <div class="widget-function am-fr" style="width:15%;">
                <el-button type="primary" round icon="el-icon-plus" @click="dialogFormVisible = true">添加单位</el-button>
              </div>
            </div>
            <div class="widget-body  widget-body-lg am-fr">
              <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r"
                     style="table-layout:fixed">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>公司名称</th>
                  <th>公司地址</th>
                  <th>公司详情</th>
                  <th>备注</th>
                  <th>管理</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in units">
                  <td>{{index+1}}</td>
                  <td>{{ item.uName }}</td>
                  <td>{{ item.simpleAddress }}</td>
                  <td>
                    <el-popover placement="top-start" title="公司详情" width="300" trigger="hover" :content="item.uDetails">
                      <span slot="reference"> {{ item.uDetails }}</span>
                    </el-popover>
                  </td>
                  <td>
                    <el-popover placement="top-start" title="备注" width="200" trigger="hover" :content="item.uRemark">
                      <span slot="reference"> {{ item.uRemark }}</span>
                    </el-popover>
                  </td>
                  <td>
                    <div class="tpl-table-black-operation"><a href="javascript:" @click="edit(item)"><i
                      class="am-icon-check"></i> 编辑</a>
                      <a href="javascript:;" @click="del()" class="tpl-table-black-operation-del"><i
                        class="am-icon-close"></i> 删除</a>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
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
        dialogFormVisible: false, //模态框
        companyApply: {
          uName: "",
          cityAddress: [], //省市区地址
          detailAddress: "", //详细地址
          simpleAddress: "",//简单地址
          uAddress: "", //总地址
          uDetails: "",
          uRemark: "",
          uStatus: "-1" //未提交的状态
        },
        companyApplyRules: {
          uName: [{required: true, message: "请输入公司名称"}],
          cityAddress: [{required: true, message: "请选择所在城市"}],
          detailAddress: [{required: true, message: "请输入详细地址"}],
          uDetails: [{required: true, message: "请输入公司详情介绍"}]
        },
        //单位信息数组
        units: []
      };
    },
    methods: {
      //添加或修改公司(通过this.companyApply有无id来判断)
      commit() {
        let companyForm = this.$refs.unitInfo; //获取公司表单对象
        companyForm.validate(valid => {
          if (valid) {
            console.log(this.companyApply);
            this.$confirm("确认操作？")
              .then(() => {
                this.companyApply.address =
                  this.companyApply.cityAddress.join() + "," + this.companyApply.detailAddress; //合并省市区和详细地址，赋给总地址。
                this.companyApply.role = "2"; //辅导员添加时需要传递角色,
                var data = this.$qs.stringify(this.companyApply);
                //通过有无id判断是添加还是修改
                let method = this.companyApply.id ? 'put' : 'post';
                this.$axios[method]("/apiTraining/unit", data)
                  .then(res => {
                    if (res.data.resultCode === 200) {
                      this.dialogFormVisible = false; //关闭模态框
                      //解析地址
                      this.units = res.data.result.units;
                      //调用整理地址的方法
                      this.addressFilter(this.units);
                      this.$notify({
                        title: "提示",
                        message: "操作成功！",
                        type: "success"
                      });
                    } else {
                      this.$notify({
                        title: "失败",
                        message: "添加失败！请稍后再试",
                        type: "error"
                      });
                    }
                  })
                  .catch(err => {
                    console.log(err);
                    this.$notify({
                      title: "提示",
                      message: "提交申请失败！请稍后再试",
                      type: "error"
                    });
                  });
              })
              .catch(err => {
                this.$notify({
                  title: "提示",
                  message: "已取消",
                  type: "info"
                });
              });
          }
        });
      },
      //改地址格式
      addressFilter(arr) {
        arr.forEach((item, index) => {
          var cityAddress = item.uAddress.split(",").slice(0, 3);
          var detailAddress = item.uAddress.split(",")[3];
          var simpleAddress = item.uAddress.split(",")[1];
          item.cityAddress = cityAddress;
          item.detailAddress = detailAddress;
          item.simpleAddress = simpleAddress;
        });
      },
      //编辑
      edit(item) {
        //item为这条数据的表单对象
        console.log(item);
        this.companyApply = JSON.parse(JSON.stringify(item)); //深度克隆，否则对象之间的引用会出现bug
        this.dialogFormVisible = true;
      }
      ,
      //删除公司
      del() {
      },

      //模态框关闭时，重置表单
      closeDialog() {
        this.$refs.unitInfo.resetFields();
        this.companyApply = {
          uName: "",
          cityAddress: [], //省市区地址
          detailAddress: "", //详细地址
          uAddress: "", //总地址
          uDetails: "",
          uRemark: "",
          uStatus: "-1" //未提交的状态
        }
      }
    },
    //页面加载初始化
    created() {
      this.$axios
        .get("/training-service/v1/training/units")
        .then(res => {
          console.log(res);
          this.units = res.data;
          //调用整理地址的方法
          this.addressFilter(this.units);
        })
        .catch(err => {
          console.log(err);
        });
    },
  };
</script>

<style scoped>
  td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
