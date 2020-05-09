<template>
  <div class="tpl-content-wrapper">
    <!--学生信息模态框-->
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true" width="40%" @close="closeDialog">
      <el-table :data="students" height="250px" stripe style="width:100%;">
        <el-table-column prop="s_id" label="学号"></el-table-column>
        <el-table-column prop="s_name" label="姓名"></el-table-column>
        <el-table-column prop="c_id" label="班级"></el-table-column>
        <el-table-column prop="s_phone" label="手机号"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--单位列表-->
    <div class="row-content am-cf">
      <div class="row">
        <!--斑马线-->
        <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div class="widget am-cf">
            <div class="widget-head am-cf">
              <div class="widget-title am-fl">实训单位情况</div>
            </div>
            <div class="widget-body  widget-body-lg am-fr" style="min-height: 795px">
              <table
                width="100%"
                class="am-table am-table-compact am-table-striped tpl-table-black "
                id="example-r"
                style="table-layout:fixed">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>公司名称</th>
                  <th>公司地址</th>
                  <th>公司介绍</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="gradeX" v-for="(item, index) in filterAllCompany">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.uName }}</td>
                  <td>
                    <el-popover placement="top-start" title="地址详情" width="300" trigger="hover" :content="item.uAddress">
                      <span slot="reference"> {{ item.simpleAddress }}</span>
                    </el-popover>
                  </td>
                  <td style="width:400px;">
                    <el-popover placement="top-start" title="公司介绍" width="200" trigger="hover" :content="item.uRemark">
                      <span slot="reference"> {{ item.uDetails }}</span>
                    </el-popover>
                  </td>
                  <td>
                    <div class="tpl-table-black-operation">
                      <a href="javascript:;" @click="showStudent(item.id)">
                        <i class="am-icon-pencil"></i>查看学生
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
        units: [],
        students: [],
        dialogVisible: false,

      };
    },
    created() {
      this.$axios.get("/training-service/v1/training/units").then(res => {
            this.units = res.data;
            //调用整理地址的方法
            this.addressFilter(this.units);
        }).catch(err => {
          console.log(err);
        });
    },
    methods: {
      //地址过滤
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
      //显示学生
      showStudent(id) {
        this.dialogVisible = true;
        this.$axios
          .get("apiLeave/unitStudents?u_id=" + id)
          .then(res => {
            if (res.data.resultCode === 200) {
              this.students = res.data.result.students;
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      //关闭模态框时 清空数据
      closeDialog() {
        this.students = []
      }
    },
    computed: {
      //只返回已通过审核的公司
      filterAllCompany() {
        return this.units.filter((item, index) => item.uStatus == 1);
      }
    }
  };
</script>

<style scoped>
  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
