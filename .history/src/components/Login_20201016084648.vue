<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
           <div class="avatar_box">
               <img src="../assets/logo.png" alt="">
           </div>
           <!-- 登录表单区域 -->
           <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
               <!-- 用户名 -->
              <el-form-item prop="username">
                 <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password">
                 <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
              </el-form-item>
              <el-form-item class="btns">
                  <!-- 登录 -->
                  <el-button type="primary" @click="login">登录</el-button>
                  <!-- 重置 -->
                  <el-button type="info" @click="resetForm">重置</el-button>
              </el-form-item>
           </el-form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

</style>