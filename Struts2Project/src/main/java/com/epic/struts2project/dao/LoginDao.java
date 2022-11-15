/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project.dao;

import com.epic.struts2project.db.DbConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Amayuru indeewara
 */
public class LoginDao {
    
    public boolean checkEqualityUser(String userName, String password) throws ClassNotFoundException, SQLException{
        DbConnection dbConnection = new DbConnection();
        Connection connection = dbConnection.getConnection();
        PreparedStatement pstm = connection.prepareStatement("select * from Registration where userName=? && password=?");
        pstm.setObject(1, userName);
        pstm.setObject(2, password);
        ResultSet rst = pstm.executeQuery();
        if (rst.next()){
            return true;
        }else{
            return false;
        }
    }
}
