package com.yang.springbootbackend.model.dto.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * 聊天响应DTO
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatResponse implements Serializable {

    /**
     * 消息内容
     */
    private String content;

    /**
     * 表情符号
     */
    private String emoji;

    private static final long serialVersionUID = 1L;
} 