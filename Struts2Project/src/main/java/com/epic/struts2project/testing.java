/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project;

import com.epic.struts2project.db.DbConnection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Amayuru indeewara
 */
public class testing {
    public static void main(String args[]) throws ClassNotFoundException, SQLException{
//        DbConnection dbConnection= new DbConnection();
//        Connection connection = dbConnection.getConnection();
 Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/epic", "root", "1234");
        try {
            PreparedStatement pstm = connection.prepareStatement("select * from Registration");
            ResultSet rst = pstm.executeQuery();
            System.out.println(rst.getObject(1));
        } catch (SQLException ex) {
            Logger.getLogger(testing.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
}
