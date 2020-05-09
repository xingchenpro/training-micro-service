<template>
  <div class="tpl-content-wrapper">
    <div class="row-content am-cf">
      <div class="row">
        <!--斑马线-->
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div
              class="widget-head am-cf"
              style="display: flex;border-bottom:none;">
              <div class="widget-title am-fl" style="flex:0.6">
                <el-tabs v-model="currentStatus">
                  <el-tab-pane label="查看全部学生" name="全部"></el-tab-pane>
                  <el-tab-pane label="校内实训学生" name="0"></el-tab-pane>
                  <el-tab-pane label="校外实训学生" name="1"></el-tab-pane>
                </el-tabs>
              </div>
              <div class="widget-function am-fr" style="flex:0.4">
                <el-select
                  v-model="currentClass"
                  filterable
                  clearable
                  placeholder="选择或输入班级"
                  style="width:49%"
                  @clear="clear(1)">
                  <el-option
                    v-for="item in classes"
                    :key="item.cId"
                    :label="item.cName"
                    :value="item.cName"
                  ></el-option>
                </el-select>
                <el-select
                  v-model="currentTeacher"
                  filterable
                  clearable
                  placeholder="选择或输入指导教师"
                  style="width:49%"
                  @clear="clear(0)">
                  <el-option
                    v-for="item in teachers"
                    :key="item.tId"
                    :label="item.tName"
                    :value="item.tId"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="widget-body  widget-body-lg am-fr" style="min-height: 785px">
              <table
                width="100%"
                class="am-table am-table-compact am-table-striped tpl-table-black "
                style="table-layout:fixed"
                id="example-r">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>班级</th>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>手机号</th>
                  <th>实训题目</th>
                  <th>指导教师</th>
                  <!--<th>周总结完成数</th>
                  <th>实训报告</th>-->
                </tr>
                </thead>
                <tbody>
                <tr class="even gradeX" v-for="(item, index) in currentTable">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.student.cId }}</td>
                  <td>{{ item.sId }}</td>
                  <td>{{ item.student.sName }}</td>
                  <td>{{ item.student.sPhone }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ showTeaName(item.tutor) }}</td>
                <!--  <td>{{ item.weekSummaryCount }}</td>
                  <td>{{ item.trainingReportStatus }}</td>-->
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
        currentStatus:"全部",
        currentClass: "",
        currentTeacher: "",
        teachers: [],
        classes: [],
        trainingStudentsInfo: []
      };
    },
    created() {
      //获取班级信息
      this.classes = JSON.parse(sessionStorage.classes);
      this.teachers = JSON.parse(sessionStorage.teachers);
      this.$axios.get("/training-service/v1/training/training/info").then(res => {
          if (res.data.resultCode === 200) {
            console.log(res.data.result);
            this.trainingStudentsInfo = res.data.result.trainingInfo;
            console.log(this.trainingStudentsInfo);
          }
        }).catch(err => {
          console.log(err);
        });
    },
    computed: {
      currentTable() {
        var arr = this.trainingStudentsInfo.filter((item, index) => {
          if (this.currentStatus == "全部" && this.currentTeacher == "" && this.currentClass == "") {
            return true;
          }
          if ((item.tutor == this.currentTeacher || this.currentTeacher == "") &&
            (item.student.cId == this.currentClass || this.currentClass == "") &&
            (item.state == this.currentStatus || this.currentStatus == "全部")) {
            return true;
          }
          return false;
        });

        return arr;
      },
    },
    methods: {
      //清空选择框，状态置空
      clear(state) {
        state === 0 ? this.currentTeacher = "" : this.currentClass = ""
      },
      //显示教师名
      showTeaName(tId) {
        var len = this.teachers.length;
        for (var i = 0; i < len; i++) {
          if (this.teachers[i].tId == tId) {
            return this.teachers[i].tName;
          }
        }
      },
    }
  };
</script>

<style scoped></style>
