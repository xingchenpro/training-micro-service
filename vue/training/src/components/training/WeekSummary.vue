<template>

  <div class="tpl-content-wrapper">
    <!--周总结标签-->
    <div class="row-content am-cf" style="width: 18%;float: left">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title" style="text-align: center">我的周总结</div>
            </div>
            <div class="widget-body am-fr" style="height: 790px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--周总结内容-->
    <div class="row-content am-cf" style="width: 82%;float: left;margin-left: -35px;">
        <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl">第 1 周周总结</div>
            </div>
            <div class="widget-body am-fr " style="min-height: 790px;">
              <el-form label-width="100px">

                <el-form-item label="本周工作总结:" prop="summary">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="要求的支持和工作建议:" prop="advise">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="下周工作安排:" prop="arrange">
                  <el-input type="textarea"  rows="5"></el-input>
                </el-form-item>

                <el-form-item label="教师对问题的处理:" prop="deal">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="教师评价考核:" prop="evaluation">
                  <el-input type="textarea"  rows="5"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submit(item)">保存</el-button>

                </el-form-item>

              </el-form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "week-summary",
    data() {
      return {
        activeIndex: 1,
        currentWeek: 18,
        weekSummary: []
      };
    },
    methods:{
      submit(item) {

      },

    },
  }
</script>

<style scoped>

</style>
