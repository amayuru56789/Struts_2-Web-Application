/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project.dao;

import com.epic.struts2project.bean.RegistrationBean;
import com.epic.struts2project.db.DbConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

/**
 *
 * @author Amayuru indeewara
 */
public class RegistrationDao {
    
    DbConnection dbConnection = new DbConnection();
    
    public boolean registerUser(RegistrationBean registrationBean) throws ClassNotFoundException, SQLException{
System.out.println("Hello");        
//DbConnection dbConnection = new DbConnection();
        Connection connection = dbConnection.getConnection();
        System.out.println("Hello");
        PreparedStatement pstm = connection.prepareStatement("insert into Registration values(?,?,?,?,?,?,?,?)");
        System.out.println("Hello 2");
        pstm.setObject(1, registrationBean.getUserID());
        pstm.setObject(2, registrationBean.getUserName());
        pstm.setObject(3, registrationBean.getAddress());
        pstm.setObject(4, registrationBean.getEmail());
        pstm.setObject(5, registrationBean.getContact());
        pstm.setObject(6, registrationBean.getPassword());
        pstm.setObject(7, registrationBean.getCreateTime());
        pstm.setObject(8, registrationBean.getLastUpdateTime());
        if(pstm.executeUpdate()>0){
            return true;
        }else{
            return false;
        }
        //return pstm.executeUpdate()>0;
    }
    
    public ArrayList<RegistrationBean> report() throws SQLException, ClassNotFoundException{
        Connection connection = dbConnection.getConnection();
        PreparedStatement pstm = connection.prepareStatement("select * from Registration");
        ResultSet rst = pstm.executeQuery();
        //System.out.println(rst.getObject(1));
        ArrayList<RegistrationBean> load = new ArrayList<RegistrationBean>();
        while(rst.next()){
             RegistrationBean registrationBean = new RegistrationBean(
                     rst.getString(1),
                     rst.getString(2),
                     rst.getString(3),
                     rst.getString(4),
                     rst.getString(5),
                     rst.getString(6),
                     rst.getString(7),
                     rst.getString(8)
             );
             load.add(registrationBean);
        }
        
        return load;
    }
    
    public boolean updateUser(RegistrationBean registrationBean) throws ClassNotFoundException, SQLException{
        Connection connection = dbConnection.getConnection();
        LocalDateTime time = LocalDateTime.now();  
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
        String lastDateTime = time.format(format);
        PreparedStatement pstm = connection.prepareStatement("update Registration set userName=?, address=?, email=?, contact=?, password=?, createTime=?, lastUpdateTime=? where userID=?");
        pstm.setObject(1, registrationBean.getUserName());
        pstm.setObject(2, registrationBean.getAddress());
        pstm.setObject(3, registrationBean.getEmail());
        pstm.setObject(4, registrationBean.getContact());
        pstm.setObject(5, registrationBean.getPassword());
        pstm.setObject(6, "");
        pstm.setObject(7, lastDateTime);
        pstm.setObject(8, registrationBean.getUserID());
        if (pstm.executeUpdate() > 0){
            return true;
        }else{
            return false;
        }
    }
}
