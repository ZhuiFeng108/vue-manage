<template>
	<el-container style="height: 100%">
		<h1>{{msg}}</h1>
		<el-aside width="auto">
			<common-aside />
		</el-aside>
		<el-container>
			<el-header><common-header :xxx='msg'/></el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHeader from "../src/components/CommonHeader.vue";

export default {
	name: "VueHome",
	components: {
		CommonAside,
		CommonHeader,
	},
	data() {
		return {
			msg: 9999
		};
	},
};
</script>

<style lang="less" scoped>
.el-header {
	background-color: #333;
}
.el-main {
	padding-top: 0;
}
</style>
