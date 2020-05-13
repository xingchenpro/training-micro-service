<template>
  <div>
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf">
              <div class="widget-head am-cf">
                <div class="widget-title am-fl">个人信息</div>

                <!--信息栏开始-->
                <div cId="widget-body am-fr">
                  <el-form ref="info" :model="info" label-width="80px"
                           style="margin:0 auto;width:400px;min-height:780px;">
                    <el-form-item label="姓名">
                      <el-input v-model="info.sName"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                      <el-select v-model="info.sSex" placeholder="请选择性别" style="width:320px;">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="电话">
                      <el-input v-model="info.sPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                      <el-input v-model="info.sEmail"></el-input>
                    </el-form-item>

                    <el-form-item label="地址">
                      <el-input v-model="info.sAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                      <el-input v-model="info.sRemark"></el-input>
                    </el-form-item>
                    <el-form-item label="班级">
                      <el-input v-model="info.cId" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="专业">
                      <el-input v-model="info.specId" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="学号">
                      <el-input v-model="info.sId" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                      <el-input v-model="info.sIdentitycard"></el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">保存</el-button>
                    </el-form-item>
                  </el-form>

                </div>
                <!--信息栏结束-->
              </div>
              <div class="widget-body am-fr">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "studentInfo",
    data() {
      return {
        username: '',
        info: {
          sName: '',
          sSex: '',
          sIdentitycard: '',
          sAddress: '',
          sRemark: '',
          sEmail: '',
          sPhone: '',
          specId: '',
          cId: '',
          sId: '',
        }
      }
    },
    created() {
      this.username = sessionStorage.getItem("username");
      console.log(this.username);
      this.$axios.get("/basic-service/v1/info/student", {
        params: {
          sId: this.username,
          /*access_token:sessionStorage.token,*/
        },
      }).then(res => {
        console.log(res);
        if (res.data.resultCode === 200) {
          this.info = res.data.result;
        }
      }).catch(err => {
        console.log(err);
      });
    },
    methods: {
      onSubmit() {
        this.$axios.put("/basic-service/v1/info/student",this.info).then(res=>{
          if(res.data.resultCode===200){
            this.$notify({
              type:'success',
              message:'保存成功!'
            })
          }
       }).catch(err=>{
         console.log(err);
       });
      }
    }
  }
</script>

<style scoped>

</style>
