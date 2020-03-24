<template>
  <div>
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf">
              <div class="widget-head am-cf">
                <div class="widget-title am-fl">个人信息</div>
              </div>
              <!--信息栏开始-->
              <div class="widget-body am-fr">
                <el-form ref="info" :model="info" label-width="80px"  style="margin:0 auto;width:400px;min-height:700px;">
                  <el-form-item label="姓名">
                    <el-input v-model="info.name"></el-input>
                  </el-form-item>
                  <el-form-item label="电话">
                    <el-input v-model="info.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="info.email"></el-input>
                  </el-form-item>
                  <el-form-item label="年龄">
                    <el-input v-model="info.age"></el-input>
                  </el-form-item>
                  <el-form-item label="班级">
                    <el-input v-model="info.class"></el-input>
                  </el-form-item>
                  <el-form-item label="专业">
                    <el-input v-model="info.speciality"></el-input>
                  </el-form-item>
                  <el-form-item label="学号">
                    <el-input v-model="info.num"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-select v-model="info.sex" placeholder="请选择性别" style="width:320px;">
                      <el-option label="男" value="shanghai"></el-option>
                      <el-option label="女" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                  </el-form-item>
                </el-form>

              </div>
              <!--信息栏结束-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "persionInfo",
    data() {
      return {
        info: {
          name: '',
          sex: '',
          age: '',
          email: '',
          phone: '',
          speciality: '',
          class: '',
          num: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
