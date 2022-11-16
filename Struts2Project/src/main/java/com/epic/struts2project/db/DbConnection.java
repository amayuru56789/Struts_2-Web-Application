/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.epic.struts2project.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Amayuru indeewara
 */
public class DbConnection {
    
    public Connection connection;
    
    public DbConnection() {
    }
    
    public Connection getConnection() throws ClassNotFoundException{
               
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/epicdb", "root", "1234");
        } catch (SQLException ex) {
            Logger.getLogger(DbConnection.class.getName()).log(Level.SEVERE, null, ex);
        }    
        
        return connection;
    }
    
    public void connectionClose() throws SQLException{
        connection.close();
    }
}
