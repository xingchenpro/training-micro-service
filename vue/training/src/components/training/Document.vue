<template>
  <div>
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf">
              <div class="widget-head am-cf">
                <div class="widget-title am-fl">我的文档</div>
              </div>
              <div class="widget-body am-fr" style="min-height: 780px;">
                <div style="margin-bottom: 15px">
                  <el-steps :active="1" simple>
                    <el-step title="文档未上传" icon="el-icon-edit"></el-step>
                    <!--   <el-step title="文档已上传" icon="el-icon-upload"></el-step>-->
                  </el-steps>
                </div>
                <el-upload
                  class="upload-demo"
                  drag
                  :action="UploadUrl()"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文档拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" style="font-size: 14px;color: #ff730b" slot="tip">
                    文件类型:pdf,zip/rar/war,需要同时上传实训报告.pdf和程序源代码.rar/zip/war
                  </div>
                </el-upload>
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
    data() {
      return {
        sId:"",
      };
    },
    created() {
      this.sId = sessionStorage.username
    },
    methods: {
      UploadUrl: function () {
        return "http://localhost:8889/training-service/v1/training/upload/" + this.sId+"?username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token");
      }
    }
  }
</script>

<style scoped>

</style>
