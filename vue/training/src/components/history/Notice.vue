<template>
  <div>
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <div class="row">
          <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
            <div class="widget am-cf">
              <div class="widget-head am-cf">
                <div class="widget-title am-fl">历史公告</div>
                <div class="widget-function am-fr">
                  <el-date-picker type="daterange" v-model="dataRange" value-format="yyyy-MM-dd"
                                  start-placeholder="起始日期" end-placeholder="终止日期"></el-date-picker>
                </div>
              </div>
              <div class="widget-body am-fr" style="min-height: 780px">
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="title"
                    label="标题"
                    width="280">
                  </el-table-column>
                  <el-table-column
                    prop="content"
                    label="内容"
                    width="680">
                  </el-table-column>
                  <el-table-column
                    prop="releaseTime"
                    label="发布时间">
                  </el-table-column>
                </el-table>
                <!--分页-->
                <div style="position: absolute;bottom: 20px;left: 33%">
                  <el-pagination
                    :page-size="20"
                    :pager-count="7"
                    layout="prev, pager, next"
                    :total="1000">
                  </el-pagination>
                </div>
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
    name: "history",
    data() {
      return {
        dataRange: '',
        tableData: [
          {
            title: '专业负责人审批学生题目',
            content: '请仔细查看校外学生实训任务书的各项内容，对填写了任务书的学生题目审核，无填写的审核不通过。',
            releaseTime: '2019-03-01'
          },
          {
            title: '任务书现在可以正常保存',
            content: '请认真填写任务书，然后联系专业负责人进行审核,必须认真填写，否则审核无法通过',
            releaseTime: '2019-03-15  '
          },
          {
            title: '关于请假日期',
            content: '请假日期请认真填写，填写自己实际的请假截止日期！填写错误，实训审批不予通过！',
            releaseTime: '2019-04-01'
          },
          {
            title: '关于请假日期',
            content: '请假日期请认真填写，填写自己实际的请假截止日期！填写错误，实训审批不予通过！',
            releaseTime: '2019-04-01'
          },
          {
            title: '关于请假日期',
            content: '请假日期请认真填写，填写自己实际的请假截止日期！填写错误，实训审批不予通过！',
            releaseTime: '2019-04-01'
          },
          {
            title: '任务书现在可以正常保存',
            content: '请认真填写任务书，然后联系专业负责人进行审核,必须认真填写，否则审核无法通过',
            releaseTime: '2019-03-15  '
          },
          {
            title: '任务书现在可以正常保存',
            content: '请认真填写任务书，然后联系专业负责人进行审核,必须认真填写，否则审核无法通过',
            releaseTime: '2019-03-15  '
          },
        ]
      }
    },


  }
</script>

<style scoped>

</style>
