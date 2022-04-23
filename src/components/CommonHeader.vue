<template>
	<header>
		<div class="l-content">
			<el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
			<h3 style="color: #fff">首页{{ xxx }}{{aa}}</h3>
			<!-- <input v-model="changeVal"> -->
		</div>
		<div class="r-content">
			<el-dropdown trigger="hover" size="mini">
				<span>
					<img class="user" :src="userImg" />
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>
<script>
export default {
	props: ['xxx'],
	name: "CommonHeader",
	data() {
		return {
			aa: this.props.xxx,
			userImg: require("@images/user.jpg"),
		};
	},
	watch: {
		changeVal(){
			this.$emit("childMsg", this.xxx)
		}
	},
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
};
</script>
<style lang="less" scoped>
header {
	display: flex;
	height: 100%;
	justify-content: space-between;
	align-items: center;
}
.l-content {
	display: flex;
	align-items: center;
	.el-button {
		margin-right: 20px;
	}
}
.r-content {
	.user {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
}
</style>