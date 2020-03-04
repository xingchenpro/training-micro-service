package com.javahly.userservice.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/2
 * @QQ :1136513099
 * @desc : 接口性能日志
 */
@Slf4j
@Component
@Aspect
public class MonitorAspect {

    /**
     * 配置切入点,该方法无方法体,主要为方便同类中其他方法使用此处配置的切入点
     */
    @Pointcut("execution(* com.javahly.userservice.controller..*(..)) || execution(* com.javahly.userservice.service..*(..))")
    public void aspect() {
    }

    /**
     * 配置前置通知,使用在方法aspect()上注册的切入点,同时接受JoinPoint切入点对象,可以没有该参数
     */
    @Before("aspect()")
    public void before(JoinPoint joinPoint) {
    }

    /**
     * 配置后置通知,使用在方法aspect()上注册的切入点
     */
    @After("aspect()")
    public void after(JoinPoint joinPoint) {
    }

    /**
     * 配置后置返回通知,使用在方法aspect()上注册的切入点
     */
    @AfterReturning("aspect()")
    public void afterReturn(JoinPoint joinPoint) {
    }

    /**
     * 配置抛出异常后通知,使用在方法aspect()上注册的切入点
     */
    @AfterThrowing(pointcut = "aspect()", throwing = "ex")
    public void afterThrow(JoinPoint joinPoint, Exception ex) {
    }

    /**
     * 配置环绕通知,使用在方法aspect()上注册的切入点
     */
    @Around("aspect()")
    public Object around(JoinPoint joinPoint) throws Throwable {
        Long beginTime = System.currentTimeMillis();
        Object obj = null;
        try {
            obj = ((ProceedingJoinPoint) joinPoint).proceed();
        } catch (Exception e) {
            log.error("AOP catch exception: ", e);
            throw e;
        }
        if (log.isInfoEnabled()) {
            log.info("around " + joinPoint + "\tUse time : " + (System.currentTimeMillis() - beginTime) + " ms!");
        }
        return obj;
    }
}