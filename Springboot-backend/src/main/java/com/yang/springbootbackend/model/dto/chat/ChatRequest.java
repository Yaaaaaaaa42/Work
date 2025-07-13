package com.yang.springbootbackend.model.dto.chat;

import lombok.Data;

import java.io.Serializable;

/**
 * 聊天请求DTO
 */
@Data
public class ChatRequest implements Serializable {

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 消息内容
     */
    private String content;

    /**
     * 语音识别结果
     */
    private String transcript;

    private static final long serialVersionUID = 1L;
} 