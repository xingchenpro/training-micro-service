<template>
  <div class="tpl-content-wrapper">
    <div class="row-content am-cf" style="height:100%">
      <div class="row" style=";height:100%!important">
        <!--斑马线-->
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl">实训分配</div>
              <div class="widget-function am-fr">
                <el-select
                  v-model="currentClass"
                  filterable
                  clearable
                  placeholder="按班级筛选学生"
                  @clear="clear(1)"
                  style="margin-left:20px;">
                  <el-option
                    v-for="item in classes"
                    :key="item.cId"
                    :label="item.cName"
                    :value="item.cName">
                  </el-option>
                </el-select>
                <el-select
                  v-model="currentTeacher"
                  filterable
                  clearable
                  placeholder="选择分配的指导教师"
                  @clear="clear(0)">
                  <el-option
                    v-for="item in teachers"
                    :key="item.tId"
                    :label="item.tName"
                    :value="item.tId">
                  </el-option>
                </el-select>
                <el-button round type="primary" @click="batchDistribute">批量分配</el-button>
              </div>
            </div>
            <div class="widget-body  widget-body-lg am-fr" style="min-height: 770px;">
              <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                <thead>
                <tr>
                  <th>
                    <el-checkbox
                      @change="selectAll"
                      class="myCheckbox"
                      :value="allChecked || allSelectedItem.length === trainingSubjects.length">
                    </el-checkbox>
                  </th>
                  <th>班级</th>
                  <th>学号</th>
                  <th>姓名</th>
                  <th>实训题目</th>
                  <th>状态</th>
                  <th>指导教师</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="gradeX" v-for="item in formFilter">
                  <td>
                    <el-checkbox
                      type="checkbox"
                      @change="selectSingle(item.sId)"
                      style="display: inline-block;width:14px;height:14px"
                      :value="allSelectedItem.indexOf(item.sId) !== -1">
                    </el-checkbox>
                  </td>
                  <td>{{item.className}}</td>
                  <td>{{item.sId}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.scope===0 ? '校内': '校外'}}</td>
                  <td>{{showTeaName(item.tutor)}}</td>
                  <td>
                    <div class="tpl-table-black-operation">
                      <a href="javascript:;" @click="distribute(item.sId)">
                        <i class="am-icon-pencil"></i> 修改指导教师
                      </a>
                    </div>
                  </td>
                </tr>
                <!-- more data -->
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
        teachers: [],
        classes: [],
        currentTeacher: '',
        currentClass: '',
        allSelectedItem: [],//存放勾选的数据
        count: Number,
        allChecked: false, //标识全选
        trainingSubjects: [],
        loading: true
      }
    },
    created() {
      this.teachers = JSON.parse(sessionStorage.teachers);
      this.classes = JSON.parse(sessionStorage.classes);
      console.log(this.classes);
      var url = "/training-service/v1/training//training/distribution?tId=" + sessionStorage.username;
      this.$axios.get(url).then((res) => {
        this.loading = false;
        console.log(res);
        if (res.data.resultCode === 200) {
          this.trainingSubjects = res.data.result.trainingSubjects
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    methods: {
      //清空选择框，状态置空
      clear(scope) {
        scope === 0 ? this.currentTeacher = "" : this.currentClass = ""
      },
      //点击单选按钮
      selectSingle(sId) {
        console.log(sId);
        if (this.allSelectedItem.indexOf(sId) !== -1) {
          this.allSelectedItem.splice(this.allSelectedItem.indexOf(sId), 1);
          this.allChecked = false;
        } else {
          this.allSelectedItem.push(sId);
        }
      },
      //点击全选按钮
      selectAll(value) {
        //elementUI的@change事件会返回一个value，选中为true，退选为false
        if (value) {
          this.allSelectedItem = [];
          this.trainingSubjects.forEach((item, index) => {
            this.allSelectedItem.push(item.sId);
            this.allChecked = true
          });
        } else {
          this.allSelectedItem = [];
          this.allChecked = false;
        }
      },
      //批量分配
      batchDistribute() {
        if (this.allSelectedItem.length === 0) {
          this.$alert('请先选择学生再进行分配');
          return;
        }
        else if (this.currentTeacher == '') {
          this.$alert('请先选择分配的教师再进行分配');
          return;
        }
        this.$confirm('确认操作？').then(() => {
          var data = {
            students: this.allSelectedItem,//把数组变成字符串传递
            tId: this.currentTeacher
          };
          this.$axios.put('/training-service/v1/training/training/distribution', data).then((res) => {
            if (res.data.resultCode === 200) {
              this.trainingSubjects = res.data.result.trainingSubjects;
              this.allSelectedItem = [];
              this.$notify({
                type: 'success',
                message: '分配成功'
              })
            }
            console.log(res);
          }).catch((err) => {
            console.log(err);
          })
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消'
          })
        })
      },
      //单个分配
      distribute(sId) {
        if (this.currentTeacher == '') {
          this.$alert('请先选择分配的教师再进行分配').then(() => {
          }).catch((err) => console.log(err));
          return;
        }
        var arr = [];
        arr.push(sId);
        this.$confirm('确认操作？').then(() => {
          var data = {
            students: arr,
            tId: this.currentTeacher
          };
          this.$axios.put('/training-service/v1/training/training/distribution', data).then((res) => {
            this.trainingSubjects = res.data.result.trainingSubjects;
            if (res.data.resultCode === 200) {
              this.allSelectedItem = [];
              this.$notify({
                type: 'success',
                message: '分配成功'
              })
            } else {
              this.$notify({
                type: 'success',
                message: '分配失败，请稍后再试'
              })
            }
          }).catch((err) => {
            console.log(err);
          })
        }).catch((err) => {
          console.log(err);
          this.$notify({
            type: 'info',
            message: '已取消'
          })
        })
      },
      //通过教师ID显示教师名
      showTeaName(id) {
        var len = this.teachers.length;
        for (var i = 0; i < len; i++) {
          if (this.teachers[i].tId == id) {
            return this.teachers[i].tName
          }
        }
      }
    },
    computed: {
      formFilter() {
        return this.trainingSubjects.filter((item, index) => this.currentClass == '' || item.className == this.currentClass)
      }
    }
  }
</script>

<style scoped>

</style>
