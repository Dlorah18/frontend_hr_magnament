<template>
    <div>
        <p>Bienvenido {{ useName }}</p>
    </div>
</template>
<script>
export default{
    props:{
        useName:String
    }
}
</script>