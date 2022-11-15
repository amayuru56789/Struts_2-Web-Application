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
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;

/**
 *
 * @author Amayuru indeewara
 */
public class RegisterAction extends ActionSupport {
    
    Map<String, String> result = new HashMap<String, String>();

    public Map<String, String> getResult() {
        return result;
    }

    public void setResult(Map<String, String> result) {
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
        ArrayList<RegistrationBean> details = registrationDao.report();
        //System.out.println(details);
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        PrintWriter writer = response.getWriter();
        writer.print(details);
        if(details == null){
            result.put("status", "400");
            return SUCCESS;
        }else{
            result.put("data", "200");
            return SUCCESS;
        }
        
    }
    
    public String updateUser() throws ClassNotFoundException, SQLException{
        
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        
        LocalDateTime time = LocalDateTime.now();  
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
        String lastDateTime = time.format(format);
        
        RegistrationBean registrationBean = new RegistrationBean(
                  request.getParameter("userID"),
                  request.getParameter("userName"),
                  request.getParameter("address"),
                  request.getParameter("email"),
                  request.getParameter("contact"),
                  request.getParameter("password"),
                  " ",
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
    
    public String deleteUser(){
        return SUCCESS;
    }
}
