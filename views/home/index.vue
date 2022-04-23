<template>
	<div>
		<el-row class="home" :gutter="20">
			<el-col span="8" style="margin-top: 20px">
				<el-card shadow="hover">
					<div class="user">
						<img :src="userImg" />
						<div class="userinfo">
							<!-- <p class="name">{{ this.$root.meng }}</p> -->
							<p class="name">{{ feng }}</p>
							<p class="access">超级管理员</p>
						</div>
					</div>
					<div class="login-info">
						<p>上次登录时间：<span>2022-4-17</span></p>
						<p>上次登录地点：<span>南宁</span></p>
					</div>
				</el-card>
				<el-card style="margin-top: 20px" shadow="hover">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column
							v-for="(val, key) in tableLabel"
							:key="key"
							:prop="key"
							:label="val"
						>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="16" style="margin-top: 20px">
				<el-row :gutter="20">
					<el-col :span="8" v-for="item in countData" :key="item.name">
						<el-card
							shadow="hover"
							:body-style="{ padding: '0px' }"
							style="margin-bottom: 20px"
						>
							<div class="income">
								<i
									class="icon"
									:class="`el-icon-${item.icon}`"
									style="font-size: 30px; color: #fff"
									:style="{ background: item.color }"
								></i>
								<div class="detail">
									<div class="num">￥{{ item.value }}</div>
									<div class="txt">{{ item.name }}</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="24">
						<el-card shadow="hover" style="height: 280px; margin-bottom: 20px">
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card shadow="hover" style="height: 260px"> </el-card>
					</el-col>
					<el-col :span="12">
						<el-card shadow="hover" style="height: 260px"> </el-card>
					</el-col>
				</el-row>
				<div class="graph"></div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import { getMenu } from "@api/data.js";

export default {
	name: "VueHome",
	data() {
		return {
			a: "",
			userImg: require("@images/user.jpg"),
			tableLabel: {
				date: "日期",
				name: "姓名",
				address: "地址",
			},
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄",
				},
			],
			countData: [
				{
					name: "今日支付订单",
					value: 1723,
					icon: "success",
					color: "#2ec7c9",
				},
				{
					name: "今日收藏订单",
					value: 660,
					icon: "star-on",
					color: "#ffb980",
				},
				{
					name: "今日未支付订单",
					value: 23,
					icon: "s-goods",
					color: "#5ab1ef",
				},
				{
					name: "本月支付订单",
					value: 66889,
					icon: "success",
					color: "#2ec7c9",
				},
				{
					name: "本月收藏订单",
					value: 777,
					icon: "star-on",
					color: "#ffb980",
				},
				{
					name: "本月未支付订单",
					value: 66,
					icon: "s-goods",
					color: "#5ab1ef",
				},
			],
		};
	},
	created() {},

	computed: {
		feng() {
			return this.a;
		},
	},

	methods: {},
	// beforeMount() {
	// 	this.a = window.localStorage.getItem("lastname");
	// 	console.log("beforeMount", window.localStorage);
	// },

	mounted() {
		// console.log("mounted", window.localStorage);
		// if (window.localStorage.getItem("lastname") === "Smith") {
		// 	// this.$router.go(0)
		// 	window.localStorage.clear();
		// 	window.location.reload();
		// 	console.log("5415454", window.localStorage);
		// }
		// this.$http.get("/user?ID=12345")
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});

		getMenu().then((res) => {
			console.log(res);
		});
	},
	// updated() {
	// 	window.localStorage.removeItem("Smith");
	// 	console.log("beforeDestroy", window.localStorage);
	// },
	// destroyed() {
	// 	window.localStorage.removeItem("Smith");
	// 	console.log("beforeDestroy", window.localStorage);
	// },
};
</script>
