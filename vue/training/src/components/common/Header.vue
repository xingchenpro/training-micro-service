<template>
  <!-- 头部 -->
  <header>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible"
      append-to-body
    >
      <el-form :model="user" status-icon :rules="userRoles" ref="userForm" label-width="100px" >
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="user.oldPassword" ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="user.newPassword" ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="newPasswordConfirm">
          <el-input type="password" v-model="user.newPasswordConfirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="commit()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- logo -->
    <div class="am-fl tpl-header-logo">
      <a href="javascript:;"><img src="../../../static/images/山东建筑大学.jpg" alt=""></a>
    </div>
    <!-- 右侧内容 -->
    <div class="tpl-header-fluid">
      <!-- 侧边切换 -->
      <div class="am-fl tpl-header-switch-button am-icon-list">
                    <span>
                </span>
      </div>
      <!-- 搜索 -->
      <div class="am-fl tpl-header-search">
        <form class="tpl-header-search-form" action="javascript:;">
          <button class="tpl-header-search-btn am-icon-search"></button>
          <input class="tpl-header-search-box" type="text" placeholder="搜索内容...">
        </form>
      </div>
      <!-- 其它功能-->
      <div class="am-fr tpl-header-navbar">
        <ul>
          <!-- 欢迎语 -->
          <li class="am-text-sm tpl-header-navbar-welcome">
            <a>欢迎你,
              <span v-if="role==='1'">管理员</span>
              <span v-if="role==='2'">辅导员</span>
              <span v-if="role==='3'">指导教师</span>
              <span v-if="role==='4'">专业负责人</span>
              <span v-if="role==='5'">老师</span>
              <span v-if="role==='6'">同学</span>

            </a>
          </li>

          <!-- 新邮件 -->
          <li class="am-dropdown tpl-dropdown" data-am-dropdown>
            <a href="javascript:;" class="am-dropdown-toggle tpl-dropdown-toggle" data-am-dropdown-toggle>
              <i class="am-icon-envelope"></i>
              <span class="am-badge am-badge-success am-round item-feed-badge">4</span>
            </a>
            <!-- 弹出列表 -->
            <ul class="am-dropdown-content tpl-dropdown-content">
              <li class="tpl-dropdown-menu-messages">
                <a href="javascript:;" class="tpl-dropdown-menu-messages-item am-cf">
                  <div class="menu-messages-ico">
                    <img src="../../../static/amaze/img/user04.png" alt="">
                  </div>
                  <div class="menu-messages-time">
                    3小时前
                  </div>
                  <div class="menu-messages-content">
                    <div class="menu-messages-content-title">
                      <i class="am-icon-circle-o am-text-success"></i>
                      <span>夕风色</span>
                    </div>
                    <div class="am-text-truncate"> Amaze UI 的诞生，依托于 GitHub 及其他技术社区上一些优秀的资源；Amaze UI 的成长，则离不开用户的支持。</div>
                    <div class="menu-messages-content-time">2016-09-21 下午 16:40</div>
                  </div>
                </a>
              </li>

              <li class="tpl-dropdown-menu-messages">
                <a href="javascript:;" class="tpl-dropdown-menu-messages-item am-cf">
                  <div class="menu-messages-ico">
                    <img src="../../../static/amaze/img/user02.png" alt="">
                  </div>
                  <div class="menu-messages-time">
                    5天前
                  </div>
                  <div class="menu-messages-content">
                    <div class="menu-messages-content-title">
                      <i class="am-icon-circle-o am-text-warning"></i>
                      <span>禁言小张</span>
                    </div>
                    <div class="am-text-truncate"> 为了能最准确的传达所描述的问题， 建议你在反馈时附上演示，方便我们理解。</div>
                    <div class="menu-messages-content-time">2016-09-16 上午 09:23</div>
                  </div>
                </a>
              </li>
              <li class="tpl-dropdown-menu-messages">
                <a href="javascript:;" class="tpl-dropdown-menu-messages-item am-cf">
                  <i class="am-icon-circle-o"></i> 进入列表…
                </a>
              </li>
            </ul>
          </li>

          <!-- 新提示 -->
          <li class="am-dropdown" data-am-dropdown>
            <a href="javascript:;" class="am-dropdown-toggle" data-am-dropdown-toggle>
              <i class="am-icon-bell"></i>
              <span class="am-badge am-badge-warning am-round item-feed-badge">5</span>
            </a>

            <!-- 弹出列表 -->
            <ul class="am-dropdown-content tpl-dropdown-content">
              <li class="tpl-dropdown-menu-notifications">
                <a href="javascript:;" class="tpl-dropdown-menu-notifications-item am-cf">
                  <div class="tpl-dropdown-menu-notifications-title">
                    <i class="am-icon-line-chart"></i>
                    <span> 有6笔新的销售订单</span>
                  </div>
                  <div class="tpl-dropdown-menu-notifications-time">
                    12分钟前
                  </div>
                </a>
              </li>
              <li class="tpl-dropdown-menu-notifications">
                <a href="javascript:;" class="tpl-dropdown-menu-notifications-item am-cf">
                  <div class="tpl-dropdown-menu-notifications-title">
                    <i class="am-icon-star"></i>
                    <span> 有3个来自人事部的消息</span>
                  </div>
                  <div class="tpl-dropdown-menu-notifications-time">
                    30分钟前
                  </div>
                </a>
              </li>
              <li class="tpl-dropdown-menu-notifications">
                <a href="javascript:;" class="tpl-dropdown-menu-notifications-item am-cf">
                  <div class="tpl-dropdown-menu-notifications-title">
                    <i class="am-icon-folder-o"></i>
                    <span> 上午开会记录存档</span>
                  </div>
                  <div class="tpl-dropdown-menu-notifications-time">
                    1天前
                  </div>
                </a>
              </li>

              <li class="tpl-dropdown-menu-notifications">
                <a href="javascript:;" class="tpl-dropdown-menu-notifications-item am-cf">
                  <i class="am-icon-bell"></i> 进入列表…
                </a>
              </li>
            </ul>
          </li>

          <li class="am-text-sm">
            <a @click="editPassword" style="cursor:pointer;">
              <span>修改密码</span>
            </a>
          </li>
          <!-- 退出 -->
          <li class="am-text-sm">
              <a @click="quit" style="cursor:pointer;">
                <span class="am-icon-sign-out"></span> 退出
              </a>
          </li>

        </ul>
      </div>
    </div>

  </header>
</template>

<script>
  export default {

    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        role: Number,
        currentWeek: "一",
        dialogFormVisible: false,
        username: '',
        user: {
          username: sessionStorage.getItem("username"),
          oldPassword: '',
          newPassword: '',
          newPasswordConfirm: '',
        },
        userRoles: {
          oldPassword: [
            {required: true, message: '请输入旧密码'}
          ],
          newPassword: [
            {required: true, message: '请输入新密码'}
          ],
          newPasswordConfirm: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      }
    },
    created() {
      this.role = sessionStorage.getItem("role");
    },

    methods: {
      quit() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('roles');
        sessionStorage.removeItem('role');
        this.$router.push('/');
      },
      editPassword() {
        this.dialogFormVisible = true;
      },
      //修改密码
      commit() {
        var userForm = this.$refs.userForm;
        userForm.validate((valid) => {
          if (valid) {
            this.$confirm("确认提交").then(() => {
              var data = this.$qs.stringify(this.user);
              this.$axios.put('/uaa-service/v1/uaa/oauth/password', data).then((res) => {
                console.log(res);
                if (res.data.resultCode === 200) {
                  this.dialogFormVisible = false;
                  this.user = {};
                  this.$notify({
                    type: 'success',
                    message: '修改密码成功'
                  })
                } else if (res.data.resultCode === 403) {
                  userForm.resetFields();
                  this.$notify({
                    type: 'error',
                    message: '旧密码输入错误,请重新输入'
                  })
                } else {
                  this.$notify({
                    type: 'error',
                    message: '修改密码失败，请稍后再试'
                  })
                }
              })
                .catch((err) => {
                  console.log(err);
                  this.$notify({
                    type: 'error',
                    message: '修改密码失败'
                  })
                })
            }).catch((err) => {
              console.log(err);
              this.$notify({
                type: 'info',
                message: '已取消'
              })
            })
          }
        });

      }
    },
  };
</script>

<style scoped>

</style>
