<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <div class="text-center">
            <h1 class="mb-2">Login</h1>
          </div>
          <v-card-text>
            <v-form @submit="login">
              <v-text-field
                label="Enter your number"
                name="number"
                prepend-inner-icon="mdi-phone"
                :rules="numberRules"
                class="rounded-0"
                outlined
                v-model="number"
              ></v-text-field>
              <v-text-field
                label="Enter your password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                class="rounded-0"
                :rules="textRules"
                v-model="password"
                outlined
              ></v-text-field>
              <v-btn
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
                type="submit"
                >Login</v-btn
              >
              <v-card-actions class="text--secondary">
                <a href="/" class="pl-2" style="color: #000000" >Back to Guest</a>
                <v-spacer></v-spacer>
                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                No account?
                <a href="/register" class="pl-2" style="color: #000000">Sign Up</a>
              </v-card-actions>
            </v-form>
          </v-card-text>
          <v-card-actions class="ml-6 mr-6 text-center">
            <p>
              By continuing, you agree to Fedorae Education's
              <a href="#" class="pl-2" style="color: #000000">Policy</a> and
              <a href="#" class="pl-2" style="color: #000000">Terms of Use</a>
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'VueTravelLogin',
    layout:'Login',

    data() {
        return {
          number: '',
            password: '',
            numberRules: [
            v => Number.isInteger(Number(v))  || "The value must be an integer number",
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            v => /^((06)|(08)|(09))[0-9]{8}$/gm.test(v) || ' begin 06 ,08 ,09 max 10 ,no special characters ',
            ],
            textRules:[
            v => /^[A-Z]{1}\w{7}$/gm.test(v) || ' Uppercase Fist latter,no special characters,no thai language',
            v => (v && v.length <= 8) || 'Name must be less than 8 characters',
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        async login(e){
            e.preventDefault();

        const payload = {
          number: this.number,
          password: this.password
        };
        try {
          await this.$auth.loginWith('local', {
            data: payload
          });
          this.$router.push('/home');
        } catch (e) {
          this.$router.push('/login');
        }

        }
    },
};
</script>

<style lang="scss" scoped>
</style>