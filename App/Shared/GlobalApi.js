import { create } from "apisauce";

const api = create({
    //  baseURL: 'http://192.168.0.113:1337/api',
    baseURL:'https://tubeguruji-admin.herokuapp.com/api',
    headers: { 
        "X-API-Key":"bc13405a8b15801d6c254c9d84375d4586f23b61ac855c37e0ad9a7549f930edd904eefdade8d4a5fb5460a3aaabd249a81717fe82656c3e3c6309c53f786859ccc9bc4414fbdf89b28a0003e3a7c11ca665de483afc382ab402473b1149409a86467f2fef96bf5d51db8fde8687d44780c3937b32b22c592f3d04a642569888"
      },
  })

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('video-courses?populate=*');
const getCourseList=(type)=>
api.get('course-lists?filters[type][$eq]='
+type+'&populate[Topic][populate][0]=Content&populate[image][populate][0]=image');

const setCourseProgress=(data)=>api.post('/course-progresses',data);

const getCourseProgress=(uid,courseId)=>
api.get('/course-progresses?filters[uid][$eq]='
+uid+'&filters[courseId][$eq]='+courseId)
export default{
    getSlider,
    getVideoCourse,
    getCourseList, 
    setCourseProgress,
    getCourseProgress
}