/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project.action;

import com.epic.struts2project.bean.RegistrationBean;
import com.epic.struts2project.dao.RegistrationDao;
import com.opensymphony.xwork2.ActionSupport;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;

/**
 *
 * @author Amayuru indeewara
 */
public class RegisterAction extends ActionSupport {
    
    Map<String, Object> result = new HashMap<String, Object>();

    public Map<String, Object> getResult() {
        return result;
    }

    public void setResult(Map<String, Object> result) {
        this.result = result;
    }
    RegistrationDao registrationDao = new RegistrationDao();
    
    @Override
    public String execute() throws IOException, ClassNotFoundException, SQLException{
        //System.out.println("hello");
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        
        //response.setContentType("application/json");
        PrintWriter writer = response.getWriter();
//        String userID = request.getParameter("userID");
//        System.out.println(userID);
        boolean register = false;
        LocalDateTime time = LocalDateTime.now();  
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
        String formatDateTime = time.format(format);   
        String s="sa";
          RegistrationBean registrationBean = new RegistrationBean(
                  request.getParameter("userID"),
                  request.getParameter("userName"),
                  request.getParameter("address"),
                  request.getParameter("email"),
                  request.getParameter("contact"),
                  request.getParameter("password"),
                  formatDateTime,
                  s
          );
          register = registrationDao.registerUser(registrationBean);
          
          if(register){
              
            
              result.put("status", "200");
              return SUCCESS;
          }else{
              result.put("status", "400");
              return SUCCESS;
          }
        //return SUCCESS;
    }
    
    public String getAllUser() throws SQLException, ClassNotFoundException, IOException{
        Map<String, List> data = new HashMap<String, List>();
        ArrayList<RegistrationBean> details = registrationDao.report();
        //System.out.println(details);
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
//        PrintWriter writer = response.getWriter();
//        writer.print(details);
        if(details == null){
            //System.out.println("Hello");
            
            return SUCCESS;
        }else{
            //System.out.println("Hello ok");
            result.put("data", details);
            
            return SUCCESS;
        }
        
    }
    
    public String updateUser() throws ClassNotFoundException, SQLException{
        
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
//        Object newuserID =ServletActionContext.getContext().get("userID");
        LocalDateTime time = LocalDateTime.now();  
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
        String lastDateTime = time.format(format);
        String name = request.getParameter("userID");
        System.out.println(name);
        RegistrationBean searchUser = registrationDao.getAllRegistrationDetails(request.getParameter("userID"));
        String createTime = searchUser.getCreateTime();
        RegistrationBean registrationBean = new RegistrationBean(
                  request.getParameter("userID"),
                  request.getParameter("userName"),
                  request.getParameter("address"),
                  request.getParameter("email"),
                  request.getParameter("contact"),
                  request.getParameter("password"),
                  createTime,
                  lastDateTime
          );
        System.out.println(registrationBean);
        boolean updateUser = registrationDao.updateUser(registrationBean);
        if(updateUser){
            result.put("status", "200");
            return SUCCESS;
        }else{
            result.put("status", "400");
            return SUCCESS;
        }
    }
    
    public String deleteUser() throws ClassNotFoundException{
        
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        
        String userID = request.getParameter("userID");
//        System.out.println(userID);
        try {
            if(registrationDao.deleteUser(userID)){
                result.put("status", "200");
                return SUCCESS;
            }else{
                result.put("status", "400");
                return SUCCESS;
            }
        } catch (SQLException ex) {
            Logger.getLogger(RegisterAction.class.getName()).log(Level.SEVERE, null, ex);
        }
        return SUCCESS;
    }
}
