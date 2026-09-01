package com.mfrp.plens.dto;
import com.mfrp.plens.model.DecisionStatus;import jakarta.validation.constraints.NotNull;
public record DecisionRequest(@NotNull DecisionStatus status){}
