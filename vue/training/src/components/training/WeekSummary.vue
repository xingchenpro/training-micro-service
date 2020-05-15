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
                <li v-for="item in weekSummary" :class="item.wNum === activeIndex ? 'active-li' : ''"
                    style="cursor:pointer;" @click="activeIndex = item.wNum">
                  <a
                    :style="item.isSubmit == 1 ? 'color:#23b6e4': item.wNum <= currentWeek ? 'color:#F56C6C' : 'color:#878787'">
                    第 {{item.wNum}} 周
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--周总结内容-->
    <div class="row-content am-cf" style="padding-left:0;width: 86%;float: left;">
      <div class="row">
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12" v-for="item in weekSummary" v-show="activeIndex === item.wNum">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl" style="font-weight: 700;color: #60627f">
                <span>第 {{item.wNum}} 周周总结</span>
                <span v-if="item.modifyTime!=null">最后修改时间：{{item.modifyTime}}</span>
                <span v-if="item.wNum !== currentWeek" style="color:#F56C6C;">（不可编辑）</span>
                <span v-else style="color:#23b6e4;">（可编写）</span>
              </div>
            </div>
            <div class="widget-body am-fr" style="min-height: 790px;">
              <el-form label-width="100px">

                <el-form-item label="本周工作总结:" prop="summary">
                  <el-input type="textarea" :readonly="item.wNum !== currentWeek" v-model="item.summary" rows="5">
                    {{item.summary}}
                  </el-input>
                </el-form-item>

                <el-form-item label="要求的支持和工作建议:" prop="advise">
                  <el-input type="textarea" :readonly="item.wNum !== currentWeek" v-model="item.advise" rows="5">{{
                    item.advise }}
                  </el-input>
                </el-form-item>

                <el-form-item label="下周工作安排:" prop="arrange">
                  <el-input type="textarea" :readonly="item.wNum !== currentWeek" v-model="item.arrange" rows="5">{{
                    item.arrange }}
                  </el-input>
                </el-form-item>

                <el-form-item label="教师对问题的处理:" prop="deal">
                  <el-input type="textarea" :readonly="item.wNum !== currentWeek" v-model="item.deal" rows="5"> {{
                    item.deal }}
                  </el-input>
                </el-form-item>

                <el-form-item label="教师评价考核:" prop="evaluation">
                  <el-input type="textarea" :readonly="item.wNum !== currentWeek" v-model="item.evaluation" rows="5">{{
                    item.evaluation }}
                  </el-input>
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
    data() {
      return {
        activeIndex: 1,
        currentWeek: 18,
        weekSummary: []
      };
    },

    //初始化
    created() {
      this.currentWeek = Number(sessionStorage.getItem("currentWeek"));
      this.activeIndex = this.currentWeek;
      var url = "/training-service/v1/training/weekSummary?sId=" + sessionStorage.getItem("username")+"&username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token");
      this.$axios.get(url).then(res => {
        if (res.data.resultCode === 200) {
          this.weekSummary = res.data.result.weekSummary;
        } else {
          console.log(res);
        }
      })
        .catch(error => {
          console.log(error);
        });
    },

    //方法
    methods: {
      submit(item) {
        this.$confirm("确认提交？", "提示", {
          type: "warning",
          confirmButtonText: "确认",
          cancelButtonText: "取消"
        }).then(() => {
          var data = {
            sId: item.sId,
            wNum: item.wNum,
            summary: item.summary,
            advise: item.advise,
            arrange: item.arrange,
            deal: item.deal,
            evaluation: item.evaluation,
            isSubmit: "1",
          };
          console.log(data);
          this.$axios
            .post("/training-service/v1/training/weekSummary"+"?username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token"), data)
            .then(res => {
              if (res.data.resultCode === 200) {
                this.$notify({
                  type: "success",
                  message: "提交成功"
                });
              } else {
                this.$notify({
                  type: "error",
                  message: "提交失败"
                });
                console.log(res);
              }
            })
            .catch(error => {
              this.$notify({
                type: "error",
                message: "提交失败"
              });
              console.log(error);
            });
        });
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
    max-height: 760px;
    overflow: auto;

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
    background: #677f7f;
  }
</style>
