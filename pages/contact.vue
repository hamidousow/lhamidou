<script lang="ts" setup> 


  const encryptedEmail = ref("aGFtaWRvdXNvdy1wcm9AaG90bWFpbC5jb20=");
  const decodedEmail = ref('');
  
  onMounted(() => {
    decodedEmail.value = atob(encryptedEmail.value);
  })
  

</script>

<template>
  <div class="content-wrap">
    <div class="container pt-160 pb-160">
      <div class="mb-n8 row">
        <div data-aos="fade-up" class="col-12 col-lg-10 col-xl-8 aos-init aos-animate">
          <h1 class="h2 mt-15 pb-4 pb-sm-0">Besoin d'un <strong> logo </strong> unique et personnalisé ? D'un <strong> site vitrine </strong> fait sur mesure et SEO friendly ? </h1>
          <p> Envoyez-moi un message pour démarrer votre projet dès aujourd'hui ! </p>
          <ButtonComponent :to="`mailto:${decodedEmail}`"> Passez à l'action 🚀 </ButtonComponent>
        </div>
      </div>
    </div>    
  </div>
</template>



<style scoped>


.list-group.borderless .list-group-item {
    border: 0;
    color: inherit;
    background-color: initial;
    padding: 0;
}

.form-container {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 0;
}

.row.gv-2>[class*=col] {
    padding-top: 40px;
}
.row.gh-1>[class*=col] {
    padding-left: 30px;
}

.form-control {
    border-left: 0;
    border-right: 0;
    border-top: 0;
    padding-bottom: 17px;
    appearance: none;
    background-clip: padding-box;
    background-color: initial;
}

@media (max-width: 765px) {
    .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
        padding-left: 40px;
        padding-right: 40px;
    }
  }

</style>