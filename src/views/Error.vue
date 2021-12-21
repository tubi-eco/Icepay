<template>
 <div class="container-lg notFound">
    <h1>Oops!</h1>
    <p>Something went wrong. Would like to try again?</p>
 <b-button squared variant="primary" @click="$router.push({name: 'home'})">Go Back</b-button>
</div>
</template>
<script>
export default {
    name:'ErrorMessage'
}
</script>