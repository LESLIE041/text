<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>个人主页</el-breadcrumb-item>
         </el-breadcrumb>
         <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<el-button type="primary" class="button" disabled>点击+号上传头像<i class="el-icon-upload el-icon--right"></i></el-button>
<el-input v-model="input" placeholder="账号" class="Account_Number"></el-input>
<el-input v-model="input_0" placeholder="密码" class="Password"></el-input>
    </div>
</template>

<script>
export default {
    data () {
      return {
        imageUrl: '',
        input: '',
        input_0: ''
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是JPG格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过2MB!')
        }
        return isJPG && isLt2M
      }
    }
}
</script>

<style lang="less" scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader {
      align-items: center;
      margin-top: 40px;
      margin-left: 400px;
  }
  .el-icon-arrow-right {
      margin-bottom: 100px;
  }
  .button {
       margin-left: 400px;
       margin-bottom: 50px;
  }
  .Account_Number {
       margin-bottom: 20px;
       margin-left: 390px;
       width: 200px;
  }
  .Password {
       margin-bottom: 20px;
       margin-left: 390px;
       width: 200px;
  }
</style>
