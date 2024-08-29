<script>
	import router from "page";
	import Home from "./Home.svelte";
	import Login from "./Login.svelte";

	let page = Home;

	router("/", () => page = Home);
	router("/login", () => page = Login);
	
	router.start()
</script>


<svelte:component this={page}/>


<style>
</style>