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
              {{username}}
          </span>
      </div>
    </div>

    <!--管理员 1-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="role==='1'">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>实训管理</span>
        </template>
        <router-link to="/home/training/unitSituation">
          <el-menu-item index="1-5">实训单位情况</el-menu-item>
        </router-link>
        <router-link to="/home/training/StudentSituation">
          <el-menu-item index="1-6">实训学生情况</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
        <a target="_blank" href="http://49.233.192.8:8761/" style="color: black">
          <el-menu-item index="2-2">注册中心</el-menu-item>
        </a>
        <a target="_blank" href="http://106.13.129.169:8070/">
          <el-menu-item index="2-2">配置中心</el-menu-item>
        </a>
        <a target="_blank" href="http://localhost:9411/">
          <el-menu-item index="2-2">链路追踪</el-menu-item>
        </a>
        <a target="_blank" href="http://localhost:8769/">
          <el-menu-item index="2-2">服务监控</el-menu-item>
        </a>
        <a target="_blank" href="http://localhost:8889/swagger-ui.html">
          <el-menu-item index="2-2">API 管理</el-menu-item>
        </a>
        <a target="_blank" href="http://127.0.0.1:8899/admin/index.html#/">
          <el-menu-item index="2-2">Lcn 分布式事务管理</el-menu-item>
        </a>
        <a target="_blank" href="http://106.13.129.169:8081/">
          <el-menu-item index="2-2">RocketMQ 控制台</el-menu-item>
        </a>
        <a target="_blank" href="http://106.13.129.169:9000/#/">
          <el-menu-item index="2-2">Docker Web 管理</el-menu-item>
        </a>
        <!-- <el-menu-item index="2-1">用户管理</el-menu-item>
         <el-menu-item index="2-2">学生管理</el-menu-item>
         <el-menu-item index="2-3">教师管理</el-menu-item>
         <el-menu-item index="2-4">班级管理</el-menu-item>
         <el-menu-item index="2-5">专业管理</el-menu-item>
         <el-menu-item index="2-6">单位信息管理</el-menu-item>-->
      </el-submenu>
    </el-menu>

    <!--辅导员菜单 2-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="role==='2'">

      <router-link to="/home/training/units">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">单位管理</span>
        </el-menu-item>
      </router-link>

      <router-link to="/home/leave/manager">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">实训审批</span>
        </el-menu-item>
      </router-link>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>实训管理</span>
          </template>
          <router-link to="/home/training/unitSituation">
            <el-menu-item index="1-5">实训单位情况</el-menu-item>
          </router-link>
       <!--   <router-link to="/home/training/StudentSituation">
            <el-menu-item index="1-6">实训学生情况</el-menu-item>
          </router-link>-->
        </el-submenu>

    </el-menu>

    <!--指导教师 3-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="roles.indexOf(3)!==-1">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>实训指导</span>
        </template>
        <router-link :to="{ path : '/home/leave/manager',query: { currentRole: 3 }}">
          <el-menu-item index="1-1">实训审批</el-menu-item>
        </router-link>
        <router-link :to="{ path : '/home/training/subjects',query: { currentRole: 3 }}">
          <el-menu-item index="1-2">实训课题审核</el-menu-item>
        </router-link>
        <router-link :to="{ path : '/home/training/WeekSummaries',query: { currentRole: 3 }}">
          <el-menu-item index="1-1">学生周总结</el-menu-item>
        </router-link>
      </el-submenu>

    </el-menu>

    <!--专业负责人 4-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="roles.indexOf(4)!==-1">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>专业管理</span>
        </template>
        <router-link :to="{ path : '/home/leave/manager',query: { currentRole: 4 }}">
          <el-menu-item index="1-1">实训审批</el-menu-item>
        </router-link>
        <router-link to="/home/training/distribution">
          <el-menu-item index="1-4">实训分配</el-menu-item>
        </router-link>
        <router-link :to="{ path : '/home/training/subjectExamine',query: { currentRole: 4 }}">
          <el-menu-item index="1-3">实训课题审核</el-menu-item>
        </router-link>
     <!--   <router-link to="/home/training/unitSituation">
          <el-menu-item index="1-5">实训单位情况</el-menu-item>
        </router-link>-->
        <router-link to="/home/training/StudentSituation">
          <el-menu-item index="1-6">实训学生情况</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>

    <!--班主任 5-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="roles.indexOf(5)!==-1">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>班级管理</span>
        </template>
        <router-link :to="{ path : '/home/training/WeekSummaries',query: { currentRole: 5 }}">
          <el-menu-item index="1-1">学生周总结</el-menu-item>
        </router-link>
       <!-- <router-link :to="{ path : '/home/training/subjects'}">
          <el-menu-item index="1-2">学生实训课题</el-menu-item>
        </router-link>-->
        <!--<el-menu-item index="1-3">学生实训情况</el-menu-item>-->
        <!-- <el-menu-item index="1-4">实训报告管理</el-menu-item>-->
      </el-submenu>

    </el-menu>


    <!--学生菜单 6-->
    <el-menu default-active="1" class="el-menu-vertical-demo" v-if="role==='6'">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>实训过程</span>
        </template>
        <router-link to="/home/training/weekSummary">
          <el-menu-item index="1-1">我的周总结</el-menu-item>
        </router-link>

        <router-link to="/home/training/document">
          <el-menu-item index="1-4-1">我的文档</el-menu-item>
        </router-link>
      </el-submenu>

      <router-link to="/home/leave">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">实训申请</span>
        </el-menu-item>
      </router-link>

      <router-link to="/home/training/subject">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">实训课题</span>
        </el-menu-item>
      </router-link>


    </el-menu>


    <!--通用-->
    <el-menu default-active="1" class="el-menu-vertical-demo">

      <!--  <router-link to="/home/history/notice">
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">历史公告</span>
          </el-menu-item>
        </router-link>-->

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
      第<br/><span style="font-size:34px;">{{ currentWeek}}</span><br/>周
    </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        role: Number,
        roles: String, //多个角色
        username: String,
        currentWeek: "1"
      }
    },
    created() {
      if(sessionStorage.getItem("username")==null){
        this.$router.push({path: '/'});
      }

      this.$axios.get('/basic-service/v1/info/system?flag=1').then( (res)=>{
        sessionStorage.setItem('currentWeek',JSON.stringify(res.data.result.week));
      }).catch( (err)=>{
        console.log(err);
      });
      this.role = sessionStorage.getItem("role");
      this.roles = sessionStorage.getItem("roles");
      this.username = sessionStorage.getItem("username");
      this.currentWeek = sessionStorage.getItem("currentWeek");
    },
    computed:{
    },
  };
</script>

<style>

</style>
