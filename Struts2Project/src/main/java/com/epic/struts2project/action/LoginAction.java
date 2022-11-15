/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project.action;

import com.epic.struts2project.dao.LoginDao;
import com.epic.struts2project.dao.RegistrationDao;
import com.opensymphony.xwork2.ActionSupport;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;

/**
 *
 * @author Amayuru indeewara
 */
public class LoginAction extends ActionSupport {
    
    Map<String, String> result = new HashMap<String, String>();

    public Map<String, String> getResult() {
        return result;
    }

    public void setResult(Map<String, String> result) {
        this.result = result;
    }
    
    LoginDao loginDao = new LoginDao();
    
    @Override
    public String execute() throws ClassNotFoundException, SQLException{
        
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        
        String userName = request.getParameter("userName");
        String password = request.getParameter("password");
        //System.out.println(userName+" "+password);
        boolean bool = loginDao.checkEqualityUser(userName, password);
        if(bool){
            result.put("status", "200");
            return SUCCESS;
        }else{
            result.put("status", "400");
            return SUCCESS;
        }
        
    }
}
