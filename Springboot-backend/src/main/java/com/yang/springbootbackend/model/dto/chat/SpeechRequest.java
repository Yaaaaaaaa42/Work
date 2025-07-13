package com.yang.springbootbackend.model.dto.chat;

import lombok.Data;

import java.io.Serializable;

/**
 * 语音识别请求DTO
 */
@Data
public class SpeechRequest implements Serializable {

    /**
     * 语音识别结果
     */
    private String transcript;

    /**
     * 用户ID
     */
    private Long userId;

    private static final long serialVersionUID = 1L;
} 