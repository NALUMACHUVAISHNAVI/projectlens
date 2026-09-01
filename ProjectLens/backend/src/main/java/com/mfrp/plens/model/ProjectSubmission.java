package com.mfrp.plens.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class ProjectSubmission {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false) private String podName;
    @Column(nullable = false) private String title;
    @Column(length = 4000, nullable = false) private String problemStatement;
    @Column(length = 4000, nullable = false) private String objectives;
    @Column(nullable = false) private String technologyStack;
    private String documentationLink;
    private Integer alignmentScore;
    private Integer overlapScore;
    @Enumerated(EnumType.STRING) private DecisionStatus decisionStatus;
    private LocalDateTime createdAt;

    public ProjectSubmission() { }
    public Long getId() { return id; }
    public String getPodName() { return podName; } public void setPodName(String value) { podName = value; }
    public String getTitle() { return title; } public void setTitle(String value) { title = value; }
    public String getProblemStatement() { return problemStatement; } public void setProblemStatement(String value) { problemStatement = value; }
    public String getObjectives() { return objectives; } public void setObjectives(String value) { objectives = value; }
    public String getTechnologyStack() { return technologyStack; } public void setTechnologyStack(String value) { technologyStack = value; }
    public String getDocumentationLink() { return documentationLink; } public void setDocumentationLink(String value) { documentationLink = value; }
    public Integer getAlignmentScore() { return alignmentScore; } public void setAlignmentScore(Integer value) { alignmentScore = value; }
    public Integer getOverlapScore() { return overlapScore; } public void setOverlapScore(Integer value) { overlapScore = value; }
    public DecisionStatus getDecisionStatus() { return decisionStatus; } public void setDecisionStatus(DecisionStatus value) { decisionStatus = value; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    @PrePersist void prepare() { if (decisionStatus == null) decisionStatus = DecisionStatus.PENDING; if (createdAt == null) createdAt = LocalDateTime.now(); }
}
