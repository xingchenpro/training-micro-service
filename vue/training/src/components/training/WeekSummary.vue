<template>

  <div class="tpl-content-wrapper">
    <!--周总结标签-->
    <div class="row-content am-cf" style="width: 14%;float: left;padding-right: 5px">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title" style="text-align: center;font-weight: 700;color: black">我的周总结</div>
            </div>
            <div class="widget-body am-fr" style="height: 790px">

              <ul>
                <li><a href="#">第 1 周</a></li>
                <li><a href="#">第 2 周</a></li>
                <li><a href="#">第 3 周</a></li>
                <li><a href="#">第 4 周</a></li>
                <li><a href="#">第 5 周</a></li>
                <li><a href="#">第 6 周</a></li>
                <li><a href="#">第 8 周</a></li>
                <li><a href="#">第 9 周</a></li>
                <li><a href="#">第 10 周</a></li>
                <li><a href="#">第 11 周</a></li>
                <li><a href="#">第 12 周</a></li>
                <li><a href="#">第 13 周</a></li>
                <li><a href="#">第 14 周</a></li>
                <li><a href="#">第 15 周</a></li>
                <li><a href="#">第 16 周</a></li>
                <li><a href="#">第 17 周</a></li>
                <li><a href="#">第 18 周</a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--周总结内容-->
    <div class="row-content am-cf" style="padding-left:0;width: 86%;float: left;">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl" style="font-weight: 700;color: #60627f">第 1 周周总结</div>
            </div>
            <div class="widget-body am-fr" style="min-height: 790px;">
              <el-form label-width="100px">

                <el-form-item label="本周工作总结:" prop="summary">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="要求的支持和工作建议:" prop="advise">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="下周工作安排:" prop="arrange">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="教师对问题的处理:" prop="deal">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>

                <el-form-item label="教师评价考核:" prop="evaluation">
                  <el-input type="textarea" rows="5"></el-input>
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
    methods: {
      submit(item) {

      },

    },
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    margin-left: -32px;
    width: 150px;
    background-color: #fcfffd;

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
</style>
