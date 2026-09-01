package com.mfrp.plens.dto;

import jakarta.validation.constraints.NotBlank;

public record ProjectSubmissionRequest(
        @NotBlank String podName,
        @NotBlank String title,
        @NotBlank String problemStatement,
        @NotBlank String objectives,
        @NotBlank String technologyStack,
        String documentationLink) {
}
