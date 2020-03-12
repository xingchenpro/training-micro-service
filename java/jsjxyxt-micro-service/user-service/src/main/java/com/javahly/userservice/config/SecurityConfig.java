package com.javahly.userservice.config;

import com.javahly.userservice.handler.MyAccessDeniedHandler;
import com.javahly.userservice.handler.MyAuthenticationFailureHandler;
import com.javahly.userservice.handler.MyAuthenticationSuccessHandler;
import com.javahly.userservice.handler.MyLogoutHandler;
import com.javahly.userservice.service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/4
 * @QQ :1136513099
 * @desc :
 */
@Configuration
@EnableWebSecurity//开启WebSecurity功能
@EnableGlobalMethodSecurity(prePostEnabled = true)//开启方法上的保护
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MyAuthenticationFailureHandler failureHandler;

    @Autowired
    private MyAuthenticationSuccessHandler successHandler;

    @Autowired
    private MyLogoutHandler logoutHandler;

    @Autowired
    MyAccessDeniedHandler accessDeniedHandler;

    @Bean
    UserDetailsService userService() {
        return new LoginService();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        //从数据库中获取用户认证信息
        auth.userDetailsService(userService());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                //admin/**的URL都需要有超级管理员角色，如果使用.hasAuthority()方法来配置，需要在参数中加上ROLE_,如下.hasAuthority("ROLE_2")
                .antMatchers("/admin/**").hasRole("2")
                .anyRequest().authenticated()
                .and().formLogin().loginPage("/loginPage")
                .loginProcessingUrl("/login")
                .usernameParameter("username").passwordParameter("password").permitAll()
                .successHandler(successHandler)
                .failureHandler(failureHandler)
                .and().exceptionHandling()
                .accessDeniedHandler(accessDeniedHandler)
                .and().logout().permitAll().and().csrf().disable()
                .logout().addLogoutHandler(logoutHandler)
                .and().sessionManagement().invalidSessionUrl("/logout");
    }
}
