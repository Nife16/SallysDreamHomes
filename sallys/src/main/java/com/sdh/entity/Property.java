package com.sdh.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="propertys")
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "sqFeet")
    private Integer sqFeet;
    
    @Column(name = "price")
    private Double price;
    
    @Column(name = "date_posted")
    private LocalDateTime datePosted;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Column(name = "beds")
    private Integer beds;
    
    @Column(name = "baths")
    private Integer baths;
    
    @Column(name = "house_type")
    private String houseType;
    
    @Column(name = "is_sold")
    private Boolean isSold = false;

    @OneToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    Address address;

    // Agent assigned to the property (agent who created the house)
    @OneToOne
    @JoinColumn(name = "agent_id", referencedColumnName = "id")
    Account agent;

    public Property() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSqFeet() {
        return sqFeet;
    }

    public void setSqFeet(Integer sqFeet) {
        this.sqFeet = sqFeet;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDateTime getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(LocalDateTime datePosted) {
        this.datePosted = datePosted;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getBeds() {
        return beds;
    }

    public void setBeds(Integer beds) {
        this.beds = beds;
    }

    public Integer getBaths() {
        return baths;
    }

    public void setBaths(Integer baths) {
        this.baths = baths;
    }

    public String getHouseType() {
        return houseType;
    }

    public void setHouseType(String houseType) {
        this.houseType = houseType;
    }

    public Boolean getIsSold() {
        return isSold;
    }

    public void setIsSold(Boolean isSold) {
        this.isSold = isSold;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Account getAccount() {
        return agent;
    }

    public void setAccount(Account agent) {
        this.agent = agent;
    }

    @Override
    public String toString() {
        return "Property [id=" + id + ", sqFeet=" + sqFeet + ", price=" + price + ", datePosted=" + datePosted
                + ", imageUrl=" + imageUrl + ", beds=" + beds + ", baths=" + baths + ", houseType=" + houseType
                + ", isSold=" + isSold + ", address=" + address + ", account=" + agent + "]";
    }

}
