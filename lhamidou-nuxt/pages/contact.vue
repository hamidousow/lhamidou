<script lang="ts" setup>
</script>

<template>
  <div class="content-wrap">
    <div class="py-160 px-160">
      <div class="container">
        <div class="mb-n8 row">
          <div data-aos="fade-up" class="col-12 col-lg-10 col-xl-8 aos-init aos-animate">
            <h1 class="h2 mt-15 pb-4 pb-sm-0 mb-130">Pour toutes demandes, ou pour passer le salut, contactez-moi 👋
            </h1>
          </div>
        </div>
        <div class="gh-1 gv-2 pb-10 row">
          <div class="col-12 col-lg-4 pe-0">
            <div class="mb-60 aos-init aos-animate" data-aos="fade-right">
              <p class="lead mb-17 fw-medium">Contact info:</p>
              <ul class="list-group borderless font-size-17">
                <li class="list-group-item">Email:
                  <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email"
                    class="text-decoration-none">hello@themebau.com</a>
                </li>
                <li class="list-group-item">Phone:
                  <a href="callto:+1 202-358-0309" class="text-decoration-none">+1 202-358-0309</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-container col-12 mt-5 mt-lg-0 col-lg-8">
            <form method="POST" action="contact">
              <!-- <p v-if="data.formResponse?.invalid" class="error"> The email field is required but got " {{ data.formResponse?.email }}"</p> -->
              <div class="gh-1 gv-2 row">
                <div data-aos="fade-up" class="col-12 col-md-6 aos-init aos-animate">
                  <input placeholder="Your Name *" type="name" class="form-control form-control">
                </div>
                <div data-aos="fade-up" class="col-12 col-md-6 aos-init aos-animate">
                  <input placeholder="Your Email *" name="email" type="email" class="form-control form-control">
                </div>
                <div data-aos="fade-up" class="col-12 col-md-6 aos-init aos-animate">
                  <input placeholder="Company" type="company" class="form-control form-control">
                </div>
                <div data-aos="fade-up" class="col-12 col-md-6 aos-init aos-animate">
                  <select class="form-control">
                    <option>Type of Project</option>
                    <option>Colibri Creative Project</option>
                    <option>Colibri Project</option>
                  </select>
                </div>
                <div data-aos="fade-up" class="col-12 col-md-6 aos-init aos-animate">
                  <select class="form-control">
                    <option>Your Budget</option>
                    <option>&lt; 10 000</option>
                    <option>10-20k</option>
                    <option>20-30k</option>
                    <option>&gt; 30 000</option>
                  </select>
                </div>
                <div data-aos="fade-up" class="col-12 col aos-init aos-animate">
                  <input placeholder="Title" type="text" class="form-control form-control">
                </div>
                <div data-aos="fade-up" class="col-12 col aos-init aos-animate">
                  <textarea class="form-control" rows="1" placeholder="Message *"></textarea>
                </div>
                <div data-aos="fade-up" class="col-12 col aos-init">
                  <button class="btn btn-dark btn-with-ball mt-20" name="button">submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.py-160 {
  padding-top: 160px;
}

.px-160 {
  padding-bottom: 160px;
}

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