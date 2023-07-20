
package com.alessandro.spring.datajpa.model;
import javax.persistence.*;
import java.util.List;
import com.alessandro.spring.datajpa.business.*;


@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Contatto> contatti;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter and Setter methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Contatto> getContatti() {
        return contatti;
    }

    public void setContatti(List<Contatto> contatti) {
        this.contatti = contatti;
    }
    
    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + username + ", password=" + password + "]";
    }
}
