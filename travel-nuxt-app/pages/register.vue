<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <div class="text-center">
            <h1 class="mb-2">Register</h1>
          </div>
          <v-card-text>
            <v-form ref="entryForm" @submit.prevent="submitHandler">
              <v-text-field
                label="Enter your Name"
                name="Name"
                :rules="textRules || textThai"
                class="rounded-0"
                outlined
                required
                v-model="name"
              ></v-text-field>
              <v-text-field
                label="Enter your LastName"
                name="LastName"
                required
                class="rounded-0"
                :rules="textRules || textThai"
                v-model="lastname"
                outlined
              ></v-text-field>
              <v-select
                :items="items"
                outlined
                required
                class="rounded-0"
                v-model="bank"
                label="select bank"
              >
              </v-select>
              <v-text-field
                :rules="numberRules"
                required
                type="number"
                v-model="numberbank"
                label="Enter your number Bank"
                outlined
                class="rounded-0"
              >
              </v-text-field>
              <v-btn
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
                type="submit"
                >Sumit</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 text-center"> Detail </v-card-title>

        <v-card-text >
            <p class=" mt-5 text-h6">Name: <span class=" black--text">{{name}}</span></p>
            <p class=" text-h6">lastName: <span class=" black--text">{{ lastname }}</span></p>
            <p class=" text-h6">Bank: <span class=" black--text">{{ bank }}</span></p>
            <p class=" text-h6">Bank Number: <span class=" black--text">{{ numberbank }}</span></p>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false" to="/login" > I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
  
  <script>
  export default {
      name: 'VueTravelLogin',
      layout:'Login',
  
      data() {
          return {
              dialog: false,
              name: '',
              lastname: '',
              bank:'',
              numberbank:'',
              items: ['กรุงเทพ', 'กสิกร', 'พาณิช',],
              banknumber:undefined,
              numberRules: [
              v => (v && v.length <= 10) || 'Name must be less than 10 characters',
              ],
              textRules:[
              v => /^[A-Za-z]+$/gm.test(v) || ' only english text , no space',
              ],
              textThai:[
              v => /[\u0E00-\u0E7F]+$/gm.test(v) || '  only thai text , no space',
              ]
          };
      },
  
      mounted() {
          
      },
      methods:{
        submitHandler () {
        if (this.$refs.entryForm.validate()){
            this.dialog = true
            console.log(this.dialog)
        } 

    }
      }
  
  };
  </script>
  
  <style lang="scss" scoped>
</style>