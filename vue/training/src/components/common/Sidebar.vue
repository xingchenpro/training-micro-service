<template>
  <!-- 侧边导航栏 -->
  <div class="left-sidebar">
    <!-- 用户信息 -->
    <div class="tpl-sidebar-user-panel">
      <div class="tpl-user-panel-slide-toggleable">
        <div class="tpl-user-panel-profile-picture">
          <img src="../../../static/images/user.jpg">
        </div>
        <span class="user-panel-logged-in-text">
              管理员
          </span>
      </div>
    </div>

    <!-- 管理员菜单 -->
    <ul class="sidebar-nav"  v-if="role==='7'">
      <li class="sidebar-nav-heading">Components <span class="sidebar-nav-heading-info"> 附加组件</span></li>
      <li class="sidebar-nav-link">
        <a href="index.html" class="active">
          <i class="am-icon-home sidebar-nav-link-logo"></i> 首页
        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="../src/tables.html">
          <i class="am-icon-table sidebar-nav-link-logo"></i> 表格
        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="calendar.html">
          <i class="am-icon-calendar sidebar-nav-link-logo"></i> 日历
        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="form.html">
          <i class="am-icon-wpforms sidebar-nav-link-logo"></i> 表单

        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="chart.html">
          <i class="am-icon-bar-chart sidebar-nav-link-logo"></i> 图表

        </a>
      </li>

      <li class="sidebar-nav-heading">Page<span class="sidebar-nav-heading-info"> 常用页面</span></li>
      <li class="sidebar-nav-link">
        <a href="javascript:;" class="sidebar-nav-sub-title">
          <i class="am-icon-table sidebar-nav-link-logo"></i> 数据列表
          <span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
        </a>
        <ul class="sidebar-nav sidebar-nav-sub">
          <li class="sidebar-nav-link">
            <a href="../src/table-list.html">
              <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 文字列表
            </a>
          </li>

          <li class="sidebar-nav-link">
            <a href="../src/table-list-img.html">
              <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 图文列表
            </a>
          </li>
        </ul>
      </li>
      <li class="sidebar-nav-link">
        <a href="../src/sign-up.html">
          <i class="am-icon-clone sidebar-nav-link-logo"></i> 注册
          <span class="am-badge am-badge-secondary sidebar-nav-link-logo-ico am-round am-fr am-margin-right-sm">6</span>
        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="login.html">
          <i class="am-icon-key sidebar-nav-link-logo"></i> 登录
        </a>
      </li>
      <li class="sidebar-nav-link">
        <a href="../src/404.html">
          <i class="am-icon-tv sidebar-nav-link-logo"></i> 404错误
        </a>
      </li>
    </ul>

    <!--学生菜单 6-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="role==='6'">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>


      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">导航五</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">历史公告</span>
      </el-menu-item>

      <router-link to="/home/info">
      <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      </router-link>
    </el-menu>

    <!--第几周-->
    <div
      style="width:100%;margin-top:10px;padding:5px;font-size:34px;border-bottom:1px solid #ededed;text-align: center;">
      第<br/><span style="font-size:34px;">{{ currentWeek }}</span><br/>周
    </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        role: Number,
        currentWeek: "一"
      }
    },
    created() {
      this.role = sessionStorage.getItem("role");
    },
  };
</script>

<style>

</style>
