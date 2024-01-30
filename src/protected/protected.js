// import router from './routes/appRoutes.ts'


// router.beforeEach((to, from, next) => {
//     let web = ["home", "login", "verifyAccount", "resetPassword","forgotPassword","register"];
//     if(web.includes(to.name)){
//         next();
//     }else{
//         axios.post('/api/auth/verify-token',{
//             token: localStorage.token
//         }).then(response=>{
//             if(response.data.verification === true){
//                 next();
//             }else{
//                 router.push({
//                     name:'home',
//                     params:{
//                         serverError:true,
//                         serverMsg: 'Please login to continue.'
//                     }
//                 });
//             }
//         }).catch(response=> {
//             console.log(response);
//         });
//     }
// });