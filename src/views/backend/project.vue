<template>
  <div>
    <div class="create-project-btn">
      <span>
        <i></i>
        创建项目
      </span>
    </div>
    <ul class="project-list">
      <li class="project-item">第一个项目</li>
      <li class="project-item">第2个项目</li>
      <li class="project-item">第3个项目</li>
      <li class="project-item">第4个项目</li>
      <li class="project-item">第5个项目</li>
      <li class="project-item">第6个项目</li>
    </ul>
  </div>
</template>

<style>
.create-project-btn {
  width: 98%;
  height: 40px;
  border: 1px solid #000;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  font: 16px/40px "宋体";
  color: #324157;
  cursor: pointer;
}
.project-list {
  width: 100%;
  overflow: hidden;
}
.project-list .project-item {
  float: left;
  display: block;
  width: 220px;
  height: 150px;
  background-color: #324157;
  font: 18px/150px "宋体";
  text-align: center;
  color: #fff;
  border-radius: 10px;
  margin: 0 0 10px 20px;
  cursor: pointer;
}
</style>
