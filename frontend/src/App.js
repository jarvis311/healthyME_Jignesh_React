import './App.css';
import Home from './components/pages/Home';
import { Routes, Route, } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { SignUpUser } from './components/Authantication/SignUpUser';
import { SignInUser } from './components/Authantication/SignInUser';
import { InfoProduct } from './components/pages/InfoProduct';
import { DashBoard } from './components/pages/DashBoard';
import { UpdateProduct } from './components/pages/UpdateProduct';
import { SignInAsAdmin } from './components/Authantication/SignInAsAdmin';
import { AdminPanal } from './components/pages/AdminPanal';
import { About } from './components/pages/About';
import { DeleteProduct } from './components/pages/DeleteProduct';
import { CreateAdmin } from './components/pages/CreateAdmin';
import { GetAllUserAdminPanal } from './components/pages/GetAllUserAdminPanal';
import { DeleteUSer } from './components/pages/DeleteUSer';
import { AddingCatagory } from './components/pages/AddingCatagory';
import { AddProductAdmin } from './components/pages/AddProductAdmin';
import { CatagoryFetch } from './components/pages/CatagoryFetch';
import { GetApprovalProduct } from './components/pages/GetApprovalProduct';
import { ApprovalPage } from './components/pages/ApprovalPage';
import { DenialApproval } from './components/pages/DenialApproval';
import { DeleteCatagory } from './components/pages/DeleteCatagory';
import { DisplayAllProduct } from './components/pages/DisplayAllProduct';
import { ShowRecipes } from './components/pages/ShowRecipes';
import { AddRecipes } from './components/pages/AddRecipes';
import { AddBlog } from './components/Blogs/AddBlog';
import { ShowBlog } from './components/Blogs/ShowBlog';
import { InfoBlog } from './components/Blogs/InfoBlog';


function App() {

  return (
    
    <div>
    
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/signin" element={<SignInUser />} />
          <Route path="/dashbord" element={<DashBoard/>} />
          <Route path="/infoproduct/:_id" element={<InfoProduct/>} />
          <Route path="/updateProduct/:_id" element={<UpdateProduct/>} />
          <Route path="/deleteProduct/:_id" element={<DeleteProduct/>} />
          <Route path="/denialApproval/:_id" element={<DenialApproval/>} />
          <Route path="/loginAdmin" element={<SignInAsAdmin/>} />
          <Route path="/adminpanal" element={<AdminPanal/>} />
          <Route path="/form" element={<AddProductAdmin/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/createAdmin" element={<CreateAdmin/>} />
          <Route path="/getAllUserAdminpanal" element={<GetAllUserAdminPanal/>} />
          <Route path="/deleteUser/:_id" element={<DeleteUSer/>} />
          <Route path="/deleteCatagory/:_id" element={<DeleteCatagory/>} />
          <Route path="/catagory" element={<AddingCatagory/>} />
          <Route path="/getcat" element={<CatagoryFetch/>} />
          <Route path="/updateapprove/:_id" element={<ApprovalPage/>} />
          <Route path="/approval" element={<GetApprovalProduct/>} />
          <Route path="/getproduct" element={<DisplayAllProduct/>} />
          <Route path="/recipice" element={<ShowRecipes/>} />
          <Route path="/addrecipes/:_id" element={<AddRecipes/>} />
          <Route path="/addblog" element={<AddBlog/>} />
          <Route path="/getblog" element={<ShowBlog/>} />
          <Route path="/singleblog/:_id" element={<InfoBlog/>} />


        </Routes>
    

      
    </div>
  );
}

export default App;
